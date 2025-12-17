;

let disposedInIf = [];
function testDisposalsInIf(ifTrue) {
  using a = {
    [Symbol.dispose]: () => disposedInIf.push("a")
  };

  if (ifTrue) {
    using b = {
      [Symbol.dispose]: () => disposedInIf.push("b")
    };
  } else {
    using c = {
      [Symbol.dispose]: () => disposedInIf.push("c")
    };
  }

  using d = {
    [Symbol.dispose]: () => disposedInIf.push("d")
  };

  disposedInIf.push("e");
}
testDisposalsInIf(true);
print(disposedInIf, ["b", "e", "d", "a"]);
disposedInIf = [];
testDisposalsInIf(false);
print(disposedInIf, ["c", "e", "d", "a"]);
