;


var called = false;
var target = {};
var handler = { ownKeys: () => called = true };
var holder = Proxy.revocable(target, handler);

holder.revoke();

print(() => Object.getOwnPropertyNames(holder.proxy), TypeError);
print(called, false);
