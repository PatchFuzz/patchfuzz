;


var called = false;
var target = {};
var handler = { preventExtensions: () => called = true };
var holder = Proxy.revocable(target, handler);

holder.revoke();

print(() => Object.preventExtensions(holder.proxy), TypeError);
print(called, false);
