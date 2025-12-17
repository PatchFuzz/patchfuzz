;

{
  const disposed = [];
  const stack = new DisposableStack();
  print(stack.defer(() => disposed.push(1)), undefined);
  stack.defer(() => disposed.push(2));
  print(stack.disposed, false);
  stack.dispose();
  print(stack.disposed, true);
  print(disposed, [2, 1]);
  stack.dispose();
  print(disposed, [2, 1]);
  print(() => stack.defer(() => disposed.push(3)), ReferenceError);
}

{
  const values = [];
  const stack = new DisposableStack();
  stack.defer(() => values.push(1));
  stack.defer(() => values.push(2));
  print(stack.disposed, false);
  {
    using stk = stack;
    stk.use({
      [Symbol.dispose]() {
        values.push(3);
      },
    });
    stk.adopt(4, (v) => values.push(v));
    stk.defer(() => values.push(5));
  }
  print(stack.disposed, true);
  print(values, [5, 4, 3, 2, 1]);
}

{
  print(() => {
    const stack = new DisposableStack();
    stack.defer(undefined);
  }, TypeError);

  print(() => {
    const stack = new DisposableStack();
    stack.defer(null);
  }, TypeError);

  print(() => {
    const stack = new DisposableStack();
    stack.defer(1);
  }, TypeError);
}
