var x = "wrong";
var t = {x: "x"};
var hits = 0;
var p = new Proxy(t, {
    has(t, id) {
        var found = id in t;
        if (++hits == 2)
            delete t[id];
        return found;
    },
    get(t, id) { return t[id]; }
});
with (p)
    x += " x";



print(hits, 2);
print(t.x, "undefined x");
