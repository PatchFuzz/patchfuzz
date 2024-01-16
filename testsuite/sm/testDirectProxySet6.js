load(libdir + "asserts.js");


var called = false;
var target = {};
var handler = { set: () => called = true };
var holder = Proxy.revocable(target, handler);

holder.revoke();

assertThrowsInstanceOf(() => holder.proxy.foo = 'bar', TypeError);
assertEq(called, false);
