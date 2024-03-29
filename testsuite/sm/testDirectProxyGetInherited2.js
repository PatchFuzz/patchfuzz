

var handler = {
    get(t, id, r) {
        assertEq(this, handler);
        assertEq(t, target);
        assertEq(id, "foo");
        assertEq(r, obj);
        return "bar";
    },
    getOwnPropertyDescriptor(t, id) {
        throw "FAIL";
    }
};

var target = {};
var proto = new Proxy(target, handler);
var obj = Object.create(proto);
assertEq(obj.foo, "bar");


var origObj = obj;
for (var i = 0; i < 4; i++)
    obj = Object.create(obj);
assertEq(obj.foo, "bar");


obj = origObj;
for (var i = 0; i < 4; i++)
    obj = new Proxy(obj, {});
assertEq(obj.foo, "bar");
