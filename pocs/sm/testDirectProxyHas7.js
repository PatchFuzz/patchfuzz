;


var called = false;
var target = {};
var handler = { has: () => called = true };
var holder = Proxy.revocable(target, handler);

holder.revoke();

print(() => 'foo' in holder.proxy, TypeError);
print(called, false);
