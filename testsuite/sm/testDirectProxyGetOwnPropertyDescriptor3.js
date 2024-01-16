load(libdir + "asserts.js");


var called = false;
var target = {};
var handler = { getOwnPropertyDescriptor: () => called = true };
var holder = Proxy.revocable(target, handler);

holder.revoke();

var test = function () { Object.getOwnPropertyDescriptor(holder.proxy, 'foo'); }
assertThrowsInstanceOf(test, TypeError);
assertEq(called, false);
