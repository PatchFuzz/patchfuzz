function foo(x) {
  var k = "value";
  return x[k] = 1;
};
%PrepareFunctionForOptimization(foo);
var obj = {};
Object.defineProperty(obj, 'value', {
  set: function(x) {
    throw 'nope';
  }
});
try {
  foo(obj);
} catch (e) {
}
try {
  foo(obj);
} catch (e) {
}
%OptimizeFunctionOnNextCall(foo);
try {
  foo(obj);
} catch (e) {
}

function bar(x) {
  var k = "value";
  return (x[k] = 1) ? "ok" : "nope";
};
%PrepareFunctionForOptimization(bar);
var obj2 = {};
Object.defineProperty(obj2, 'value', {
  set: function(x) {
    throw 'nope';
    return true;
  }
});

try {
  bar(obj2);
} catch (e) {
}
try {
  bar(obj2);
} catch (e) {
}
%OptimizeFunctionOnNextCall(bar);
try {
  bar(obj2);
} catch (e) {
}
