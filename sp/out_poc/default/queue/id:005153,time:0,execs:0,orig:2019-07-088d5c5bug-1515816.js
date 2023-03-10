


for (let n = 1; n < 1000; n++) {
  let stream = new ReadableStream({
    start(controller) {
      controller.enqueue(7);
    }
  });
  let reader = stream.getReader();
  oomAfterAllocations(n);
  try {
    reader.read();
    n = 1000;
  } catch { }
  resetOOMFailure();
}
