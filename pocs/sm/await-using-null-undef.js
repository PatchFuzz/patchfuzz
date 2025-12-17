;

{
  const disposed = [];
  async function testAllowedNullAndUndefInitialisers() {
    await using x = null;
    await using y = undefined;
    await using z = {
      [Symbol.asyncDispose]() {
        disposed.push(1);
      }
    }
  }
  testAllowedNullAndUndefInitialisers();
  drainJobQueue();
  print(disposed, [1]);
}
