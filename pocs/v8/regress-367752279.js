let log = "";
function foo(replacement) {
  gc();
  const o = JSON.parse('{"p":8, "q":4294967295}', function (k, v, context) {
    log += JSON.stringify(context);
    if (k === 'p') {
      this.q = replacement;
    }
  });
  return {p:1, q:replacement};
}
%PrepareFunctionForOptimization(foo);
foo({});
foo(1);
let firstLog = log;
log = "";
%OptimizeFunctionOnNextCall(foo);
foo({});
foo(1);
print(firstLog, log);
