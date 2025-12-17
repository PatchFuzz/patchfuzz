globalThis.disposed = false;

const m = parseModule(`
  await using x = {
    [Symbol.asyncDispose]() {
      globalThis.disposed = true;
    }
  }
  throw new Error("err");
`);

moduleLink(m);
moduleEvaluate(m).catch(() => 0);
drainJobQueue();

print(globalThis.disposed, true);
