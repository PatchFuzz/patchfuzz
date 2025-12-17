;


var called = false;
var target = {};
var handler = { isExtensible: () => called = true };
var holder = Proxy.revocable(target, handler);

holder.revoke();

print(() => Object.isExtensible(holder.proxy), TypeError);
print(called, false);
