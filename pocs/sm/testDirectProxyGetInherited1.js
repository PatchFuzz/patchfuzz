;

var angryHandler = new Proxy({}, {
    get(t, id) { throw new Error("angryHandler should not be queried (" + id + ")"); }
});
var angryProto = new Proxy({}, angryHandler);
var obj = Object.create(angryProto, {
    x: {value: 3},
    y: {get: () => 4}
});
print(() => obj.z, Error);  
print(obj.x, 3);
print(obj.y, 4);
