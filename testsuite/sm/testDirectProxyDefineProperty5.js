load(libdir + "asserts.js");


var called = false;
var target = {};
var handler = { defineProperty: () => called = true };
var holder = Proxy.revocable(target, handler);

holder.revoke();

var p = holder.proxy;
assertThrowsInstanceOf(() => Object.defineProperty(p, 'foo', {}), TypeError);
assertEq(called, false);
