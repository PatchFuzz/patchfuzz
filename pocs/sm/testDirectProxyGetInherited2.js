var handler = {
    get(t, id, r) {
        print(this, handler);
        print(t, target);
        print(id, "foo");
        print(r, obj);
        return "bar";
    },
    getOwnPropertyDescriptor(t, id) {
        throw "FAIL";
    }
};

var target = {};
var proto = new Proxy(target, handler);
var obj = Object.create(proto);
print(obj.foo, "bar");


var origObj = obj;
for (var i = 0; i < 4; i++)
    obj = Object.create(obj);
print(obj.foo, "bar");


obj = origObj;
for (var i = 0; i < 4; i++)
    obj = new Proxy(obj, {});
print(obj.foo, "bar");
