





function f() {
  return "abcd".charCodeAt(BigInt.asUintN(0, -1307n));
}

%PrepareFunctionForOptimization(f);
try { f(); } catch(e) {}
try { f(); } catch(e) {}
%OptimizeFunctionOnNextCall(f);
assertThrows(f, TypeError);
