var hits;
var a = new Proxy({}, {
    set(t, id, value, receiver) {
        print(id, "prop");
        print(value, 3);
        print(receiver, b);
        hits++;
    }
});
var b = Object.create(Object.create(new Proxy(Object.create(new Proxy(a, {})), {})));
hits = 0;
b.prop = 3;
print(hits, 1);
print(b.prop, undefined);
