



function test(readable) {
  
  let controller;
  let stream = new ReadableStream({
    start(c) {
      controller = c;
    }
  });
  drainJobQueue();

  
  let status = new Map;
  setPromiseRejectionTrackerCallback((p, x) => { status.set(p, x); });

  
  
  let reader = stream.getReader();
  if (!readable) {
    controller.close();
  }
  reader.releaseLock();

  
  
  let result = status.get(reader.closed);
  assertEq(result === 1 || result === undefined, true);
}

test(true);
test(false);
