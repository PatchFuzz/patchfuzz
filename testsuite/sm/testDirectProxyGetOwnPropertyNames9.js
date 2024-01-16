load(libdir + "asserts.js");


var called = false;
var target = {};
var handler = { ownKeys: () => called = true };
var holder = Proxy.revocable(target, handler);

holder.revoke();

assertThrowsInstanceOf(() => Object.getOwnPropertyNames(holder.proxy), TypeError);
assertEq(called, false);
