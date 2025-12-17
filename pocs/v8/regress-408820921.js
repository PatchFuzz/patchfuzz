function g() {
  function f() {
    try {
      f();
    } catch (e) {
      %NewRegExpWithBacktrackLimit(".+".repeat(99), "", 1).exec();
    }
  }
  performance.measureMemory();
  Object.defineProperty(d8.__proto__, "then", { get: f });
}


print(undefined, (new Worker(g, { type: "function" })).getMessage());
