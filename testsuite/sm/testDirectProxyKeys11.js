load(libdir + "asserts.js");


var called = false;
var target = {};
var handler = { ownKeys: () => called = true };
var holder = Proxy.revocable(target, handler);

holder.revoke();

assertThrowsInstanceOf(() => Object.keys(holder.proxy), TypeError);
assertEq(called, false);
