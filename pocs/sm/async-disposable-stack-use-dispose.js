;

{
  const disposed = [];
  const stack = new AsyncDisposableStack();
  async function testDisposalsWithAsyncDisposableStack() {
    const obj = {
      [Symbol.asyncDispose]() {
        disposed.push(1);
      },
    };
    stack.use(obj);
    print(stack.disposed, false);
    print(await stack.disposeAsync(), undefined);
  }
  testDisposalsWithAsyncDisposableStack();
  drainJobQueue();
  print(stack.disposed, true);
  print(disposed, [1]);

  
  print(() => stack.use({ [Symbol.asyncDispose]: () => {} }), ReferenceError);
}

{
  const disposed = [];
  const stack = new AsyncDisposableStack();
  async function testAsyncDisposableStackMultipleDispose() {
    for (let i = 0; i < 5; i++) {
      stack.use({
        [Symbol.dispose]() {
          disposed.push(i);
        },
      });
    }
    print(stack.disposed, false);
    await stack.disposeAsync();

    
    await stack.disposeAsync();
  }
  testAsyncDisposableStackMultipleDispose();
  drainJobQueue();
  print(stack.disposed, true);
  print(disposed, [4, 3, 2, 1, 0]);
}

{
  const disposed = [];
  const stack = new AsyncDisposableStack();
  async function testAsyncDisposableStackUseWithFallback() {
    stack.use({
      [Symbol.asyncDispose]() {
        disposed.push(1);
      }
    });
    stack.use({
      [Symbol.dispose]() {
        disposed.push(2);
      }
    });
    stack.use({
      [Symbol.asyncDispose]: undefined,
      [Symbol.dispose]() {
        disposed.push(3);
      }
    });
    stack.use({
      [Symbol.asyncDispose]: null,
      [Symbol.dispose]() {
        disposed.push(4);
      }
    });
    stack.use({
      [Symbol.asyncDispose]() {
        disposed.push(5);
      },
      [Symbol.dispose]() {
        
        disposed.push(6);
      }
    });
    print(stack.disposed, false);
    await stack.disposeAsync();
  }
  testAsyncDisposableStackUseWithFallback();
  drainJobQueue();
  print(stack.disposed, true);
  print(disposed, [5, 4, 3, 2, 1]);
}

{
  const disposed = [];
  const stack = new AsyncDisposableStack();
  for (let i = 0; i < 5; i++) {
    stack.use({
      [Symbol.asyncDispose]() {
        disposed.push(i);
      },
    });
  }
  print(stack.disposed, false);
  async function testAsyncDisposableStackWithUsingDecl() {
    {
      await using stk = stack;
      stk.use({
        [Symbol.asyncDispose]() {
          disposed.push(5);
        },
      });
      stk.use({
        [Symbol.dispose]() {
          disposed.push(6);
        }
      });
    }
    print(stack.disposed, true);
    {
      
      await using stk2 = stack;
    }
    print(stack.disposed, true);
  }
  testAsyncDisposableStackWithUsingDecl();
  drainJobQueue();
  print(disposed, [6, 5, 4, 3, 2, 1, 0]);
}

{
  const disposed = [];
  const stack = new AsyncDisposableStack();
  async function testAsyncDisposableStackWithNullUndefineds() {
    stack.use(undefined);
    stack.use(null);
    stack.use({
      [Symbol.asyncDispose]() {
        disposed.push(1);
      }
    });
    await stack.disposeAsync();
  }
  testAsyncDisposableStackWithNullUndefineds();
  drainJobQueue();
  print(disposed, [1]);
  print(stack.disposed, true);
}

{
  const disposed = [];
  const stack = new AsyncDisposableStack();
  let error;
  stack.use({
    [Symbol.asyncDispose]() {
      disposed.push(1);

      
      
      
      stack.use({
        [Symbol.asyncDispose]() {
          disposed.push(2);
        },
      });
    }
  });
  stack.disposeAsync().catch((e) => {
    error = e;
  });
  drainJobQueue();
  print(error instanceof ReferenceError, true);
  print(disposed, [1]);
  print(stack.disposed, true);
}

{
  print(() => {
    const stack = new AsyncDisposableStack();
    stack.use(1);
  }, TypeError);
}

{
  print(() => {
    const stack = new AsyncDisposableStack();
    stack.use({
      [Symbol.asyncDispose]: undefined
    });
  }, TypeError);

  print(() => {
    const stack = new AsyncDisposableStack();
    stack.use({
      [Symbol.asyncDispose]: null
    });
  }, TypeError);

  print(() => {
    const stack = new AsyncDisposableStack();
    stack.use({
      [Symbol.asyncDispose]: 1
    });
  }, TypeError);
}
