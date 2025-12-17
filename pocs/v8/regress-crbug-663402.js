var g_eval = eval;
function emit_f(size) {
  var body = "function f(x) {" +
             "  if (x < 0) return x;" +
             "  var a = [1];" +
             "  if (x > 0) return [";
  for (var i = 0; i < size; i++) {
    body += "0.1, ";
  }
  body += "  ];" +
          "  return a;" +
          "}";
  g_eval(body);
}



var kLength = 701;
emit_f(kLength);
%PrepareFunctionForOptimization(f);
f(1);
f(1);
%OptimizeFunctionOnNextCall(f);
var a = f(1);


var b = new Object();
for (var i = 0; i < kLength; i++) {
  print(0.1, a[i]);
}


for (var i = 0; i < 300; i++) {
  f(1);
}
