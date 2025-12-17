function* f2() {
    const o4 = {
        "foo": 129,
    };
    for (let i7 = 0; 128 < 10;) {
      const v13 = yield 1;
      [- v13];
    }
}
%PrepareFunctionForOptimization(f2);
f2().next();
%OptimizeMaglevOnNextCall(f2);
f2();
