




function throwIfNoSuchProperty(obj) {
    return new Proxy(obj, {
        get(t, id) {
            if (id in t)
                return t[id];
            throw new Error("no such handler method: " + id);
        }
    });
}


var hits = 0, savedDesc = undefined;
var touchyHandler = throwIfNoSuchProperty({
    set: undefined
});
var target = {};
var proto = new Proxy(target, touchyHandler);
var receiver = Object.create(proto);




























receiver.x = 2;
assertEq(receiver.x, 2);

var desc = Object.getOwnPropertyDescriptor(receiver, "x");
assertEq(desc.enumerable, true);
assertEq(desc.configurable, true);
assertEq(desc.writable, true);
assertEq(desc.value, 2);

