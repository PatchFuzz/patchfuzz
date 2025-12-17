;


var called = false;
var target = {};
var handler = { get: () => called = true };
var holder = Proxy.revocable(target, handler);

holder.revoke();

print(() => holder.proxy.foo, TypeError);
print(called, false);
