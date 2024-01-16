load(libdir + "asserts.js");


var called = false;
var target = {};
var handler = { isExtensible: () => called = true };
var holder = Proxy.revocable(target, handler);

holder.revoke();

assertThrowsInstanceOf(() => Object.isExtensible(holder.proxy), TypeError);
assertEq(called, false);
