var ws = new WeakSet;


print(ws.delete({}), false);


var value = {};
ws.add(value);
print(ws.has(value), true);
print(ws.delete(value), true);
print(ws.has(value), false);


for (var i = 0; i < 10; i++)
    ws.add({});
print(ws.add(value), ws);
print(ws.has(value), true);
print(ws.delete(value), true);
print(ws.has(value), false);
print(ws.delete(value), false);
print(ws.has(value), false);


print(ws.delete(15), false);


ws = new (newGlobal().WeakSet);
WeakSet.prototype.add.call(ws, value);
print(WeakSet.prototype.has.call(ws, value), true);
print(WeakSet.prototype.delete.call(ws, value), true);
print(WeakSet.prototype.has.call(ws, value), false);
print(WeakSet.prototype.delete.call(ws, value), false);
