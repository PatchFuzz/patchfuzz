;

{
  const adopted = [];
  const stack = new DisposableStack();
  print(stack.adopt(1, (v) => adopted.push(v)), 1);
  const obj = { value: 2 };
  print(stack.adopt(obj, (v) => adopted.push(v.value)), obj);
  print(stack.disposed, false);
  stack.dispose();
  print(stack.disposed, true);
  print(adopted, [2, 1]);
  stack.dispose();
  print(adopted, [2, 1]);
  print(() => stack.adopt(3, (v) => adopted.push(v)), ReferenceError);
}

{
  const values = [];
  const stack = new DisposableStack();
  print(stack.adopt(1, (v) => values.push(v)), 1);
  const obj = { value: 2 };
  print(stack.adopt(obj, (v) => values.push(v.value)), obj);
  print(stack.disposed, false);
  {
    using stk = stack;
    stk.use({
      [Symbol.dispose]() {
        values.push(3);
      },
    });
    stk.adopt(4, (v) => values.push(v));
  }
  print(stack.disposed, true);
  print(values, [4, 3, 2, 1]);
}

{
  const disposed = [];
  const stack = new DisposableStack();
  stack.adopt(null, (v) => disposed.push(v));
  stack.adopt(undefined, (v) => disposed.push(v));
  stack.adopt(1, (v) => disposed.push(v));
  stack.dispose();
  print(disposed, [1, undefined, null]);
}

{
  print(() => {
    const stack = new DisposableStack();
    stack.adopt(1, undefined);
  }, TypeError);

  print(() => {
    const stack = new DisposableStack();
    stack.adopt(1, null);
  }, TypeError);

  print(() => {
    const stack = new DisposableStack();
    stack.adopt(1, 1);
  }, TypeError);
}
