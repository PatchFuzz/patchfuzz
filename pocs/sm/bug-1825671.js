let newTarget = Object.defineProperty(function () {}.bind(), "prototype", {
  get() {
    throw 0;
  }
});

try {
  Reflect.construct(FinalizationRegistry, [ 1 ], newTarget);
} catch (n) {
  print(n === 0, false);
  print(n instanceof TypeError, true);
}
