var hits = 0;
var proto = {x: 1};
var t = Object.create(proto);
var p = new Proxy(t, {
    defineProperty(t, id, desc) { hits++; return true; }
});
p.x = 2;
print(hits, 1);
print(proto.x, 1);
print(t.hasOwnProperty("x"), false);


var receiver = Object.create(p);
receiver.x = 2;
print(hits, 1);
print(t.hasOwnProperty("x"), false);
print(receiver.hasOwnProperty("x"), true);
print(receiver.x, 2);
