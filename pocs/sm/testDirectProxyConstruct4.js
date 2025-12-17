;


var called = false;
var target = function () { };
var handler = { construct: () => called = true };
var holder = Proxy.revocable(target, handler);

holder.revoke();

print(() => new holder.proxy(), TypeError);
print(called, false);
