;


var called = false;
var target = {};
var handler = { set: () => called = true };
var holder = Proxy.revocable(target, handler);

holder.revoke();

print(() => holder.proxy.foo = 'bar', TypeError);
print(called, false);
