;


var called = false;
var target = function () { };
var handler = { apply: () => called = true };
var holder = Proxy.revocable(target, handler);

holder.revoke();

print(() => holder.proxy(), TypeError);
print(called, false);
