;


var called = false;
var target = {};
var handler = { ownKeys: () => called = true };
var holder = Proxy.revocable(target, handler);

holder.revoke();

print(() => Object.keys(holder.proxy), TypeError);
print(called, false);
