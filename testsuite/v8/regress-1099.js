






























function X() {
  var slot = "foo"; return function (a) { return slot === a; }
}

function Y(x) {
  var slot = "bar";
  return function (a) {
    x.apply(this, arguments);
    return slot === 'bar';
  };
}

var y = Y(X());
%PrepareFunctionForOptimization(y);

for (var i = 0; i < 5; i++) {
  assertTrue(y("foo"));
}

%OptimizeFunctionOnNextCall(y);
assertTrue(y("foo"));
