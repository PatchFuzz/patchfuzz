var angryHandler = new Proxy({}, {
    has: () => true,
    get: (t, id) => {
        throw new Error("angryHandler should not be queried (" + id + ")");
    }
});
var angryProto = new Proxy({}, angryHandler);

var obj = Object.create(angryProto, {
    
    
    hasOwnProperty: {
        value: Object.prototype.hasOwnProperty
    }
});

print(Object.getOwnPropertyDescriptor(obj, "foo"), undefined);
print(obj.hasOwnProperty("foo"), false);
Object.defineProperty(obj, "foo", {value: 5});
print(obj.hasOwnProperty("foo"), true);
print(obj.foo, 5);
