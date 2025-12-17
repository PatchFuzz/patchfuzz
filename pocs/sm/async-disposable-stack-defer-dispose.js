;



;

{
  const disposed = [];
  const stack = new AsyncDisposableStack();
  print(stack.defer(() => disposed.push(1)), undefined);
  stack.defer(() => disposed.push(2));
  print(stack.disposed, false);
  stack.disposeAsync();
  drainJobQueue();
  print(stack.disposed, true);
  print(disposed, [2, 1]);
  stack.disposeAsync();
  drainJobQueue();
  print(disposed, [2, 1]);
  print(() => stack.defer(() => disposed.push(3)), ReferenceError);
  print(disposed, [2, 1]);
}

{
  const values = [];
  const stack = new AsyncDisposableStack();
  stack.defer(() => values.push(1));
  stack.defer(() => values.push(2));
  print(stack.disposed, false);
  async function testDisposalsWithAwaitUsing() {
    {
      await using stk = stack;
      stk.use({
        [Symbol.asyncDispose]() {
          values.push(3);
        },
      });
      stk.adopt(4, (v) => values.push(v));
      stk.defer(() => values.push(5));
    }
  }
  testDisposalsWithAwaitUsing();
  drainJobQueue();
  print(stack.disposed, true);
  print(values, [5, 4, 3, 2, 1]);
}

{
  print(() => {
    const stack = new AsyncDisposableStack();
    stack.defer(undefined);
  }, TypeError);

  print(() => {
    const stack = new AsyncDisposableStack();
    stack.defer(null);
  }, TypeError);

  print(() => {
    const stack = new AsyncDisposableStack();
    stack.defer(1);
  }, TypeError);
}
