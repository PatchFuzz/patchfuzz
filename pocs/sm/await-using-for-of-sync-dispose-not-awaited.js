let fulfilled = false;
async function testSyncDisposeAwaitUsingNotAwaited() {
  const x = {
    [Symbol.dispose]: () => Promise.reject('sync')
  };

  for (await using d of [x]) {}
}
testSyncDisposeAwaitUsingNotAwaited().then(() => {
  fulfilled = true;
});
drainJobQueue();

print(fulfilled, true);
