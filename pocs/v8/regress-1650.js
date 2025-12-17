function g(f) {
  return f.call.apply(f.bind, arguments);
};
%PrepareFunctionForOptimization(g);
var x = new Object();

function t() {}

g(t, x);
g(t, x);
g(t, x);
%OptimizeFunctionOnNextCall(g);

function Fake() {}

var fakeCallInvoked = false;

Fake.prototype.call = function () {
  print(Fake.prototype.bind, this);
  print(2, arguments.length);
  print(fake, arguments[0]);
  print(x, arguments[1]);
  fakeCallInvoked = true;
};

Fake.prototype.bind = function () {
};

var fake = new Fake();

g(fake, x);

print(fakeCallInvoked);
