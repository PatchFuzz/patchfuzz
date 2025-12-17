;

{
  const values = [];
  const stack = new AsyncDisposableStack();
  print(stack.adopt(1, (v) => values.push(v)), 1);
  const obj = { value: 2 };
  print(stack.adopt(obj, (v) => values.push(v.value)), obj);
  print(stack.disposed, false);
  stack.disposeAsync();
  drainJobQueue();
  print(stack.disposed, true);
  print(values, [2, 1]);
  stack.disposeAsync();
  drainJobQueue();
  print(values, [2, 1]);
  print(() => stack.adopt(3, (v) => values.push(v)), ReferenceError);
  print(values, [2, 1]);
}

{
  const values = [];
  const stack = new AsyncDisposableStack();
  print(stack.adopt(1, (v) => values.push(v)), 1);
  const obj = { value: 2 };
  print(stack.adopt(obj, (v) => values.push(v.value)), obj);
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
    }
  }
  testDisposalsWithAwaitUsing();
  drainJobQueue();
  print(stack.disposed, true);
  print(values, [4, 3, 2, 1]);
}

{
  const disposed = [];
  const stack = new AsyncDisposableStack();
  stack.adopt(null, (v) => disposed.push(v));
  stack.adopt(undefined, (v) => disposed.push(v));
  stack.adopt(1, (v) => disposed.push(v));
  stack.disposeAsync();
  drainJobQueue();
  print(disposed, [1, undefined, null]);
}

{
  print(() => {
    const stack = new AsyncDisposableStack();
    stack.adopt(1, undefined);
  }, TypeError);

  print(() => {
    const stack = new AsyncDisposableStack();
    stack.adopt(1, null);
  }, TypeError);

  print(() => {
    const stack = new AsyncDisposableStack();
    stack.adopt(1, 1);
  }, TypeError);
}
