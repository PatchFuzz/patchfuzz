;


var called = false;
var target = {};
var handler = { getOwnPropertyDescriptor: () => called = true };
var holder = Proxy.revocable(target, handler);

holder.revoke();

var test = function () { Object.getOwnPropertyDescriptor(holder.proxy, 'foo'); }
print(test, TypeError);
print(called, false);
