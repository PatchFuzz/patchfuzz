var list = [Number, Function];

var ws = new WeakSet(list);
print(ws.has(Number), true);
print(ws.has(Function), true);

ws = new WeakSet(new Set(list));
print(ws.has(Number), true);
print(ws.has(Function), true);
