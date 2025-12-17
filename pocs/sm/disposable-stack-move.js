;

{
  const disposed = [];
  const stack = new DisposableStack();
  stack.use({
    [Symbol.dispose]() {
      disposed.push(1);
    },
  });
  stack.adopt(2, (v) => disposed.push(v));
  stack.defer(() => disposed.push(3));
  print(stack.disposed, false);
  const newStack = stack.move();
  print(stack.disposed, true);
  print(() => stack.use({
    [Symbol.dispose]() {
      disposed.push(4);
    },
  }), ReferenceError);
  print(newStack.disposed, false);
  stack.dispose();
  print(disposed, []);
  print(newStack.disposed, false);
  newStack.dispose();
  print(disposed, [3, 2, 1]);
  print(newStack.disposed, true);
}

{
  const disposed = [];
  function createScopeSharedResources() {
    const stack = new DisposableStack();
    stack.use({
      [Symbol.dispose]() {
        disposed.push(1);
      },
    });
    stack.adopt(2, (v) => disposed.push(v));
    stack.defer(() => disposed.push(3));
    return () => {
      using stk = stack.move();
      print(stack.disposed, true);
      print(stk.disposed, false);
      stk.adopt(4, (v) => disposed.push(v));
    }
  }
  const disposeScopeSharedResources = createScopeSharedResources();
  print(disposed, []);
  disposeScopeSharedResources();
  print(disposed, [4, 3, 2, 1]);
}

{
  const stk = new DisposableStack();
  stk.defer(() => {});
  const newStack = stk.move();
  print(newStack === stk, false);
}

{
  const disposed = [];
  print(() => {
    const stk = new DisposableStack();
    stk.defer(() => disposed.push(1));
    stk.dispose();
    const newStack = stk.move();
  }, ReferenceError);
}
