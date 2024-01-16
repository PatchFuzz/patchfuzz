load(libdir + "asserts.js");


var called = false;
var target = {};
var handler = { has: () => called = true };
var holder = Proxy.revocable(target, handler);

holder.revoke();

assertThrowsInstanceOf(() => 'foo' in holder.proxy, TypeError);
assertEq(called, false);
