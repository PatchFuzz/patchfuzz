load(libdir + "asserts.js");


var called = false;
var target = function () { };
var handler = { construct: () => called = true };
var holder = Proxy.revocable(target, handler);

holder.revoke();

assertThrowsInstanceOf(() => new holder.proxy(), TypeError);
assertEq(called, false);
