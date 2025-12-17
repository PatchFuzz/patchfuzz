;

{
  const disposedInForOf = [];
  async function testDisposalsInForOfWithAsyncIter() {
    async function* asyncGenerator() {
      yield {
        value: "a",
        [Symbol.asyncDispose]: () => disposedInForOf.push("disposed a")
      };
      yield {
        value: "b",
        [Symbol.asyncDispose]: () => disposedInForOf.push("disposed b")
      };
      yield {
        value: "c",
        [Symbol.asyncDispose]: () => disposedInForOf.push("disposed c")
      };
    }

    for await (await using disposable of asyncGenerator()) {
      await using d = {
        [Symbol.asyncDispose]() {
          disposedInForOf.push(disposable.value);
        }
      };
    }
  }

  testDisposalsInForOfWithAsyncIter();
  drainJobQueue();
  print(disposedInForOf, ["a", "disposed a", "b", "disposed b", "c", "disposed c"]);
}
