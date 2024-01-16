




let stream = new ReadableStream({
  start(controller) {
    controller.error(new Error("splines insufficiently reticulated"));
  }
});
drainJobQueue();


let status = new Map;
setPromiseRejectionTrackerCallback((p, x) => { status.set(p, x); });



let reader = stream.getReader();



let result = status.get(reader.closed);
assertEq(result === 1 || result === undefined, true);
