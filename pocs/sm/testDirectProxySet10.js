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
print(receiver.x, 2);

var desc = Object.getOwnPropertyDescriptor(receiver, "x");
print(desc.enumerable, true);
print(desc.configurable, true);
print(desc.writable, true);
print(desc.value, 2);

