let catchCalled = false;
async function testAsyncDisposeAwaitUsingAwaited() {
  await using x = {
    [Symbol.asyncDispose]: () => Promise.reject('async')
  };
}
testAsyncDisposeAwaitUsingAwaited().catch((e) => {
  catchCalled = true;
  print(e, 'async');
});
drainJobQueue();
print(catchCalled, true);
