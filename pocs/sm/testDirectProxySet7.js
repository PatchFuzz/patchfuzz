var hits = 0;
var t = {};
var p = new Proxy(t, {
    defineProperty(t, id, desc) { hits++; return true; }
});
p.x = 1;
print(hits, 1);
print("x" in t, false);


var receiver = Object.create(p);
hits = 0;
receiver.x = 2;
print(hits, 0);
print("x" in t, false);
print(receiver.hasOwnProperty("x"), true);
print(receiver.x, 2);
