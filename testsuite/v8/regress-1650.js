




























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
  assertSame(Fake.prototype.bind, this);
  assertEquals(2, arguments.length);
  assertSame(fake, arguments[0]);
  assertSame(x, arguments[1]);
  fakeCallInvoked = true;
};

Fake.prototype.bind = function () {
};

var fake = new Fake();

g(fake, x);

assertTrue(fakeCallInvoked);
