;

{
  const disposed = [];
  let wasStartedBeforeAwait = false;
  let didEvaluatePrecedingBlockStatementsBeforeAwait = false;
  let didEvaluateFollowingBlockStatementsBeforeAwait = false;
  let allStatementsRanBeforeAwait = false;

  async function testAwaitUsingCausesAnAwait(evaluateAwaitUsing) {
    let isRunningBeforeAwait = true;

    async function f() {
      wasStartedBeforeAwait = isRunningBeforeAwait;
      outer: {
        didEvaluatePrecedingBlockStatementsBeforeAwait = isRunningBeforeAwait;
        if (!evaluateAwaitUsing) break outer;
        await using _ = {
          [Symbol.asyncDispose]() {
            disposed.push(1);
          }
        };
        didEvaluateFollowingBlockStatementsBeforeAwait = isRunningBeforeAwait;
      }
      allStatementsRanBeforeAwait = isRunningBeforeAwait;
    }

    let p = f();
    isRunningBeforeAwait = false;
    await p;
  }
  testAwaitUsingCausesAnAwait(false);
  drainJobQueue();
  print(wasStartedBeforeAwait, true);
  print(didEvaluatePrecedingBlockStatementsBeforeAwait, true);
  print(allStatementsRanBeforeAwait, true);
  print(disposed, []);

  wasStartedBeforeAwait = false;
  didEvaluatePrecedingBlockStatementsBeforeAwait = false;
  didEvaluateFollowingBlockStatementsBeforeAwait = false;
  allStatementsRanBeforeAwait = false;
  testAwaitUsingCausesAnAwait(true);
  drainJobQueue();
  print(wasStartedBeforeAwait, true);
  
  
  print(didEvaluatePrecedingBlockStatementsBeforeAwait, true);
  print(didEvaluateFollowingBlockStatementsBeforeAwait, true);
  print(allStatementsRanBeforeAwait, false);
  print(disposed, [1]);
}
