load(libdir + "asserts.js");


var called = false;
var target = {};
var handler = { preventExtensions: () => called = true };
var holder = Proxy.revocable(target, handler);

holder.revoke();

assertThrowsInstanceOf(() => Object.preventExtensions(holder.proxy), TypeError);
assertEq(called, false);
