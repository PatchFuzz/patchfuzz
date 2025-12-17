;

class CustomError extends Error {}

{
  const disposed = [];
  let caught = false;
  async function testDisposedWhenFunctionThrows() {
    await using a = {
      [Symbol.asyncDispose]: () => disposed.push("a")
    };
    {
      await using b = {
        [Symbol.asyncDispose]: () => disposed.push("b")
      };
      throw new CustomError();
    }
    await using c = {
      [Symbol.asyncDispose]: () => disposed.push("c")
    };
  }
  testDisposedWhenFunctionThrows().catch((e) => {
    caught = true;
    print(e instanceof CustomError, true);
  });
  drainJobQueue();
  print(disposed, ["b", "a"]);
  print(caught, true);
}

{
  const disposed = [];
  let caught = false;
  async function testDisposedWhenAsyncDisposalInAwaitUsingMethodThrows() {
    await using a = {
      [Symbol.asyncDispose]: () => disposed.push("a")
    };
    {
      await using b = {
        [Symbol.asyncDispose]: () => {
          disposed.push("b");
          throw new CustomError();
        }
      };
    }
  }
  testDisposedWhenAsyncDisposalInAwaitUsingMethodThrows().catch((e) => {
    caught = true;
    print(e instanceof CustomError, true);
  });
  drainJobQueue();
  print(disposed, ["b", "a"]);
  print(caught, true);
}

{
  const disposed = [];
  let caught = false;
  async function testDisposedWhenSyncDisposalInAwaitUsingMethodThrows() {
    await using a = {
      [Symbol.asyncDispose]: () => disposed.push("a")
    };
    {
      await using b = {
        [Symbol.dispose]: () => {
          disposed.push("b");
          throw new CustomError();
        }
      };
    }
  }
  testDisposedWhenSyncDisposalInAwaitUsingMethodThrows().catch((e) => {
    caught = true;
    print(e instanceof CustomError, true);
  });
  drainJobQueue();
  print(disposed, ["b", "a"]);
  print(caught, true);
}

{
  const disposed = [];
  async function testDisposedWhenSyncDisposalInUsingMethodThrows() {
    await using a = {
      [Symbol.asyncDispose]: () => disposed.push("a")
    };
    {
      await using b = {
        [Symbol.dispose]: () => {
          disposed.push("b");
        }
      };
      using c = {
        [Symbol.dispose]: () => {
          disposed.push("c");
          throw new CustomError();
        }
      }
    }
  }
  testDisposedWhenSyncDisposalInUsingMethodThrows().catch((e) => {
    caught = true;
    print(e instanceof CustomError, true);
  });
  drainJobQueue();
  print(disposed, ["c", "b", "a"]);
  print(caught, true);
}
