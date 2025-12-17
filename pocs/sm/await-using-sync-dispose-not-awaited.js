let fulfilled = false;
async function testSyncDisposeAwaitUsingNotAwaited() {
  await using x = {
    [Symbol.dispose]: () => Promise.reject('sync')
  };
}
testSyncDisposeAwaitUsingNotAwaited().then(() => {
  fulfilled = true;
});
drainJobQueue();

print(fulfilled, true);
