





var m = (function m() {
  "use asm"
  var i32 = new Int32Array(4);
  var f64 = new Float64Array(4);

  function init() {
    i32[0] = 1;
    f64[0] = 0.1;
  }

  function load(b) {
    return (b ? 0 : i32[0]) + i32[0];
  }

  function store(b) {
    if (b|0) {
    } else {
      f64[0] = 42;
    }
    return f64[0];
  }

  return { init : init, load : load, store : store };
})();

m.init();

%PrepareFunctionForOptimization(m.load);
%OptimizeFunctionOnNextCall(m.load);
print(2, m.load());

%PrepareFunctionForOptimization(m.store);
%OptimizeFunctionOnNextCall(m.store);
print(0.1, m.store(1));
