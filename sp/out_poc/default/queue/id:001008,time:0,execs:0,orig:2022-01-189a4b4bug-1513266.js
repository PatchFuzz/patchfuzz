

ignoreUnhandledRejections();

function test() {
  let controller;
  let stream = new ReadableStream({
    start(c) { }
  });
  stream.getReader();
  drainJobQueue();
}


test();
oomTest(test, { verbose: true, keepFailing: false });
