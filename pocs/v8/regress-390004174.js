function foo() {
  return slot;
}

%PrepareFunctionForOptimization(foo);
%OptimizeFunctionOnNextCall(foo);
try { foo(); } catch {}

let slot = 1;
function bar(arg) {
  slot = eval("~(" + arg + " - 0.01)");
}
bar(0x80000000 + 0.12345);
print(2147483647, foo());
