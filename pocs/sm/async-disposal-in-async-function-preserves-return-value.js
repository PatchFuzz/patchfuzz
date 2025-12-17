;

{
  const disposed = [];
  let thenCalled = false;
  async function testReturnValueIsPreserved() {
    await using a = {
      [Symbol.asyncDispose]: () => disposed.push("a")
    };
    await using b = {
      [Symbol.asyncDispose]: () => disposed.push("b")
    };
    return 200;
  }
  testReturnValueIsPreserved().then((val) => {
    thenCalled = true;
    print(val, 200);
  });
  drainJobQueue();
  print(thenCalled, true);
  print(disposed, ["b", "a"]);
}

{
  const disposed = [];
  let thenCalled = false;
  async function testReturnValuePreservedWhenWithFinally() {
    try {
      await using a = {
        [Symbol.asyncDispose]: () => disposed.push("a")
      }
      return 1;
    } finally {
      await using b = {
        [Symbol.asyncDispose]: () => disposed.push("b")
      }
      return 2;
    }
  }
  testReturnValuePreservedWhenWithFinally().then((val) => {
    thenCalled = true;
    print(val, 2);
  });
  drainJobQueue();
  print(thenCalled, true);
  print(disposed, ["a", "b"]);
}
