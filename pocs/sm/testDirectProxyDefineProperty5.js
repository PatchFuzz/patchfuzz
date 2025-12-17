;


var called = false;
var target = {};
var handler = { defineProperty: () => called = true };
var holder = Proxy.revocable(target, handler);

holder.revoke();

var p = holder.proxy;
print(() => Object.defineProperty(p, 'foo', {}), TypeError);
print(called, false);
