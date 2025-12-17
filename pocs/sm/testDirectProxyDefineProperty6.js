var hits = 0;
var p = new Proxy({x: 1}, {
    defineProperty(t, k, desc) {
        
        hits++;
        return true;
    }
});

print(Object.defineProperty(p, "x", {get: function () {}}), p);
print(hits, 1);
print(p.x, 1);
