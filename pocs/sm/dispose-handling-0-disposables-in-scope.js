;

{
  const disposed = [];
  function testDisposeHandlingWhenScopeReceivesNoDisposablesIf(cond) {
    if (cond) {
      return;
    }
    using x = {
      [Symbol.dispose]() {
        disposed.push(0);
      }
    }
  }
  testDisposeHandlingWhenScopeReceivesNoDisposablesIf(true);
  print(disposed, []);
  testDisposeHandlingWhenScopeReceivesNoDisposablesIf(false);
  print(disposed, [0]);
}
