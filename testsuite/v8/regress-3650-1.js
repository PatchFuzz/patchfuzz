





function f(t) {
  var result = [];
  for (var i in t) {
    for (var j in t) {
      result.push(i + j + t[i] + t[j]);
      continue;
    }
  }
  return result.join('');
}
%PrepareFunctionForOptimization(f);

var t = {a: "1", b: "2"};
assertEquals("aa11ab12ba21bb22", f(t));
%OptimizeFunctionOnNextCall(f);
assertEquals("aa11ab12ba21bb22", f(t));
