;

{
  const disposed = [];
  const errorToThrow = new Error("error");
  const stack = new AsyncDisposableStack();
  const obj = {
    [Symbol.asyncDispose]() {
      disposed.push(1);
      throw errorToThrow;
    },
  };
  stack.use(obj);
  print(stack.disposed, false);
  print(async () => {
    await stack.disposeAsync();
  }, Error);
  print(disposed, [1]);
  print(stack.disposed, true);
}

{
  const disposed = [];
  const errorsToThrow = [new Error("error1"), new Error("error2"), new Error("error3")];
  const stack = new AsyncDisposableStack();
  for (let i = 0; i < 3; i++) {
    stack.use({
      [Symbol.asyncDispose]() {
        disposed.push(i);
        throw errorsToThrow[i];
      },
    });
  }
  print(stack.disposed, false);
  print(async () => { await stack.disposeAsync() }, errorsToThrow);
  print(stack.disposed, true);
  print(disposed, [2, 1, 0]);
  stack.disposeAsync();
  drainJobQueue();
  print(disposed, [2, 1, 0]);
}

{
  const disposed = [];
  const errorsToThrow = [new Error("error1"), new Error("error2"), new Error("error3"), new Error("error4")];
  async function testStackDisposalWithUsingAndErrors() {
    const stack = new AsyncDisposableStack();
    for (let i = 0; i < 3; i++) {
      stack.use({
        [Symbol.asyncDispose]() {
          disposed.push(i);
          throw errorsToThrow[i];
        },
      });
    }
    print(stack.disposed, false);
    {
      await using stk = stack;
      stk.use({
        [Symbol.asyncDispose]() {
          disposed.push(3);
          throw errorsToThrow[3];
        },
      });
    }
  }
  print(testStackDisposalWithUsingAndErrors, errorsToThrow);
  print(disposed, [3, 2, 1, 0]);
}

{
  const disposed = [];
  const errorsToThrow = [new Error("error1"), new Error("error2"), new Error("error3")];
  async function testStackDisposalWithUseAdoptDeferAndErrors() {
    const stack = new AsyncDisposableStack();
    stack.use({
      [Symbol.asyncDispose]() {
        disposed.push(1);
        throw errorsToThrow[0];
      },
    });
    stack.adopt(2, (v) => {
      disposed.push(v);
      throw errorsToThrow[1];
    });
    stack.defer(() => {
      disposed.push(3);
      throw errorsToThrow[2];
    });
    print(stack.disposed, false);
    await stack.disposeAsync();
  }
  print(testStackDisposalWithUseAdoptDeferAndErrors, errorsToThrow);
  print(disposed, [3, 2, 1]);
}

{
  const disposed = [];
  const errorsToThrow = [new Error("error1"), new Error("error2"), new Error("error3"), new Error("error4")];
  async function testStackDisposalWithUseAdoptDeferAndErrorsAndOutsideError() {
    await using stack = new AsyncDisposableStack();
    stack.use({
      [Symbol.asyncDispose]() {
        disposed.push(1);
        throw errorsToThrow[0];
      },
    });
    stack.adopt(2, (v) => {
      disposed.push(v);
      throw errorsToThrow[1];
    });
    stack.defer(() => {
      disposed.push(3);
      throw errorsToThrow[2];
    });

    throw errorsToThrow[3];
  }
  let caught = false;
  async function test() {
    try {
      await testStackDisposalWithUseAdoptDeferAndErrorsAndOutsideError();
    } catch (err) {
      caught = true;
      
      
      print(err instanceof SuppressedError, true);
      print(err.suppressed === errorsToThrow[3], true);
      print(() => { throw err.error }, [errorsToThrow[0], errorsToThrow[1], errorsToThrow[2]]);
    } finally {
      print(caught, true);
    }
  }
  test();
  drainJobQueue();
  print(disposed, [3, 2, 1]);
}
