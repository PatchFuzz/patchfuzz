var ws = new WeakSet();
var bar = {};
print(ws.add(bar), ws);
var foo = {};
var a = ws.add(foo);
print(a, ws);
print(a.has(bar), true);
print(a.has(foo), true);
print(WeakSet.prototype.add.call(ws, {}), ws);
