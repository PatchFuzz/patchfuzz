;

{
  const values = [];
  async function* gen() {
    yield await Promise.resolve(1);
    await using a = {
      [Symbol.asyncDispose]: () => values.push("a")
    };
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
  }
  async function testAsyncGeneratorPreservesReturnValue() {
    let it = gen();
    values.push((await it.next()).value);
    values.push((await it.next()).value);
    values.push((await it.return(40)).value);
  }
  testAsyncGeneratorPreservesReturnValue();
  drainJobQueue();
  print(values, [1, 2, "a", 40]);
}

{
  let values = [];
  async function* gen() {
    await using a = {
      [Symbol.asyncDispose]: () => values.push("a")
    };
    yield await Promise.resolve(1);
    try {
      yield await Promise.resolve(2);
      await using b = {
        [Symbol.asyncDispose]: () => values.push("b")
      };
      yield await Promise.resolve(3);
      return 4;
    } finally {
      yield await Promise.resolve(5);
      await using c = {
        [Symbol.asyncDispose]: () => values.push("c")
      };
      return 6;
    }
  }
  async function testAsyncGeneratorPreservesReturnValueWithFinallyWhenOutsideTry() {
    let it = gen();
    values.push((await it.next()).value);
    values.push((await it.return(40)).value);
  }
  testAsyncGeneratorPreservesReturnValueWithFinallyWhenOutsideTry();
  drainJobQueue();
  print(values, [1, "a", 40]);

  values = [];

  async function testAsyncGeneratorPreservesReturnValueWithFinallyWhenInsideTry() {
    let it = gen();
    values.push((await it.next()).value);
    values.push((await it.next()).value);
    values.push((await it.next()).value);
    values.push((await it.return(40)).value);
  }
  testAsyncGeneratorPreservesReturnValueWithFinallyWhenInsideTry();
  drainJobQueue();
  
  print(values, [1, 2, 3, "b", 5]);

  values = [];

  async function testAsyncGeneratorPreservesReturnValueWithFinallyWhenInsideFinally() {
    let it = gen();
    values.push((await it.next()).value);
    values.push((await it.next()).value);
    values.push((await it.next()).value);
    values.push((await it.next()).value);
    values.push((await it.return(40)).value);
  }
  testAsyncGeneratorPreservesReturnValueWithFinallyWhenInsideFinally();
  drainJobQueue();
  print(values, [1,2,3,"b",5,"a",40]);

  values = [];

  async function testAsyncGeneratorPreservesReturnValueWithFinallyWhenTillCompletion() {
    let it = gen();
    values.push((await it.next()).value);
    values.push((await it.next()).value);
    values.push((await it.next()).value);
    values.push((await it.next()).value);
    values.push((await it.next()).value);
  }
  testAsyncGeneratorPreservesReturnValueWithFinallyWhenTillCompletion();
  drainJobQueue();
  print(values, [1,2,3,"b",5,"c","a",6]);
}
