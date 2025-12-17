const Probe = (function() {
  return {
    probe: () => {},
  };
})();

const foo = (a1) => {
  function bar() {
    for (let i = 0; i < 5; i++) {
      Probe.probe();
      eval();
    }
  }
  %PrepareFunctionForOptimization(bar);
  return bar();
};

%PrepareFunctionForOptimization(foo);
foo();
%OptimizeFunctionOnNextCall(foo);
foo();
