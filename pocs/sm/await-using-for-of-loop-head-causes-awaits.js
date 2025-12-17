;

{
  const values = [];
  async function testAwaitUsingInForOfLoopHeadAwaitsPromise() {
    const obj = {
      [Symbol.asyncDispose]() {
        values.push(1);
        return new Promise(() => {});
      }
    };
  
    
    for (await using u of [obj]) {}
  
    values.push(2);
  }
  testAwaitUsingInForOfLoopHeadAwaitsPromise();
  drainJobQueue();
  print(values, [1]);
}

{
  const disposed = [];
  let caught;
  async function testAwaitUsingInForOfLoopHeadAwaitsPromiseRejection() {
    const obj = {
      [Symbol.asyncDispose]() {
        disposed.push(1);
        return new Promise((res, rej) => {
          rej('err');
        });
      }
    };

    try {
      for (await using u of [obj]) {}
    } catch (e) {
      caught = e;
    }
  }
  testAwaitUsingInForOfLoopHeadAwaitsPromiseRejection();
  drainJobQueue();
  print(disposed, [1]);
  print(caught, 'err');
}
