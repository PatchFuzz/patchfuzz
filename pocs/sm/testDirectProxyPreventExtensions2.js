var target = {};
var handler = {
    preventExtensions: function (target1) {
        print(this, handler);
        print(target1, target);
        Object.preventExtensions(target1);
        called = true;
        return true;
    }
};

var proxy = new Proxy(target, handler);
var called = false;
Object.preventExtensions(proxy);
print(called, true);

target = {};
proxy = Proxy.revocable(target, handler).proxy;
called = false;
Object.preventExtensions(proxy);
print(called, true);
