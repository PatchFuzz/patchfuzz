let disposed = false;
async function testDisposalWithRejectedPromise() {
  using x = {
    [Symbol.dispose]() {
      disposed = true;
    }
  };
  await Promise.reject();
}

testDisposalWithRejectedPromise().catch(() => {});
drainJobQueue();
print(disposed, true);
