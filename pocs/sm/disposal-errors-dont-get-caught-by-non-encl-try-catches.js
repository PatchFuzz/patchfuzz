;

class CustomError extends Error {}

{
  const disposed = [];
  let catchCalled = false;
  function testDisposalErrorIsNotCaughtByNonEnclosingTry() {
    using x = {
      [Symbol.dispose]() {
        disposed.push('a');
        throw new CustomError("dispose error");
      }
    }

    try {
      return;
    } catch {
      catchCalled = true;
    }
  }
  print(testDisposalErrorIsNotCaughtByNonEnclosingTry, CustomError);
  print(disposed, ['a']);
  print(catchCalled, false);
}

{
  const disposed = [];
  let catchCalled = false;
  function testDisposalErrorIsNotCaughtByNonEnclosingTryWhenLabelledBlocks() {
    outer: {
      using x = {
        [Symbol.dispose]() {
          disposed.push('a');
          throw new CustomError("dispose error");
        }
      }
  
      try {
        break outer;
      } catch {
        catchCalled = true;
      }
    }
  }

  print(testDisposalErrorIsNotCaughtByNonEnclosingTryWhenLabelledBlocks, CustomError);
  print(disposed, ['a']);
  print(catchCalled, false);
}
