;

const valuesDisposedWithThisAccess = [];
function testDisposalsHasThisAccess() {
  using a = {
    value: "a",
    [Symbol.dispose]() {
      valuesDisposedWithThisAccess.push(this.value);
    }
  };
}
testDisposalsHasThisAccess();
print(valuesDisposedWithThisAccess, ["a"]);
