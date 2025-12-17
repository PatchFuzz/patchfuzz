;

globalThis.disposed = [];

const m = parseModule(`
  await using x = {
    [Symbol.asyncDispose]() {
      globalThis.disposed.push(1);
    }
  }
  await using y = {
    [Symbol.asyncDispose]() {
      globalThis.disposed.push(2);
    }
  }
`);

moduleLink(m);
moduleEvaluate(m);
drainJobQueue();
print(globalThis.disposed, [2, 1]);
