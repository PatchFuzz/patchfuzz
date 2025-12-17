var c = { x: 2, y: 1 };

function g() {
  var outer = { foo: 1 };
  function f(b, c) {
    var n = outer.foo;
    for (var i = 0; i < 10; i++) {
      n += c.x + outer.foo;
    }
    if (b) return [{ x: 1.5, y: 1 }];
    else return c;
  }
  
  %ClearFunctionFeedback(f);
  return f;
}

var fun = g();
%PrepareFunctionForOptimization(fun);
fun(false, c);
fun(false, c);
fun(false, c);
%OptimizeFunctionOnNextCall(fun);
fun(false, c);
fun(true, c);
print(fun);
