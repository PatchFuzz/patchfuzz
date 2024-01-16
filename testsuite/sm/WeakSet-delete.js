var ws = new WeakSet;


assertEq(ws.delete({}), false);


var value = {};
ws.add(value);
assertEq(ws.has(value), true);
assertEq(ws.delete(value), true);
assertEq(ws.has(value), false);


for (var i = 0; i < 10; i++)
    ws.add({});
assertEq(ws.add(value), ws);
assertEq(ws.has(value), true);
assertEq(ws.delete(value), true);
assertEq(ws.has(value), false);
assertEq(ws.delete(value), false);
assertEq(ws.has(value), false);


assertEq(ws.delete(15), false);


ws = new (newGlobal().WeakSet);
WeakSet.prototype.add.call(ws, value);
assertEq(WeakSet.prototype.has.call(ws, value), true);
assertEq(WeakSet.prototype.delete.call(ws, value), true);
assertEq(WeakSet.prototype.has.call(ws, value), false);
assertEq(WeakSet.prototype.delete.call(ws, value), false);
