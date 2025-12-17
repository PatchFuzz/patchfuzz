;

{
  const disposed = [];
  const stack = new DisposableStack();
  const obj = {
    [Symbol.dispose]() {
      disposed.push(1);
    },
  };
  stack.use(obj);
  print(stack.disposed, false);
  print(stack.dispose(), undefined);
  print(stack.disposed, true);
  print(disposed, [1]);
  print(() => stack.use(obj), ReferenceError);
}

{
  const disposed = [];
  const stack = new DisposableStack();
  for (let i = 0; i < 5; i++) {
    stack.use({
      [Symbol.dispose]() {
        disposed.push(i);
      },
    });
  }
  print(stack.disposed, false);
  stack.dispose();
  print(stack.disposed, true);
  print(disposed, [4, 3, 2, 1, 0]);
  stack.dispose();
  print(disposed, [4, 3, 2, 1, 0]);
}

{
  const disposed = [];
  const stack = new DisposableStack();
  for (let i = 0; i < 5; i++) {
    stack.use({
      [Symbol.dispose]() {
        disposed.push(i);
      },
    });
  }
  print(stack.disposed, false);
  {
    using stk = stack;
  }
  print(stack.disposed, true);
  print(disposed, [4, 3, 2, 1, 0]);
  {
    using stk2 = stack;
  }
  print(disposed, [4, 3, 2, 1, 0]);
}

{
  const disposed = [];
  const stack = new DisposableStack();
  for (let i = 0; i < 5; i++) {
    stack.use({
      [Symbol.dispose]() {
        disposed.push(i);
      },
    });
  }
  print(stack.disposed, false);
  {
    using z = stack;
    z.use({
      [Symbol.dispose]() {
        disposed.push(5);
      },
    });
    print(stack.disposed, false);
  }
  print(stack.disposed, true);
  print(disposed, [5, 4, 3, 2, 1, 0]);
}

{
  const disposed = [];
  const stack = new DisposableStack();
  stack.use(undefined);
  stack.use(null);
  stack.use({
    [Symbol.dispose]() {
      disposed.push(1);
    }
  });
  stack.dispose();
  print(disposed, [1]);
}

{
  const disposed = [];
  const stack = new DisposableStack();
  stack.use({
    [Symbol.dispose]() {
      disposed.push(1);
      stack.use({
        [Symbol.dispose]() {
          disposed.push(2);
        },
      });
    }
  });
  print(() => stack.dispose(), ReferenceError);
}

{
  print(() => {
    const stack = new DisposableStack();
    stack.use(1);
  }, TypeError);
}

{
  print(() => {
    const stack = new DisposableStack();
    stack.use({
      [Symbol.dispose]: undefined
    });
  }, TypeError);

  print(() => {
    const stack = new DisposableStack();
    stack.use({
      [Symbol.dispose]: null
    });
  }, TypeError);

  print(() => {
    const stack = new DisposableStack();
    stack.use({
      [Symbol.dispose]: 1
    });
  }, TypeError);
}
