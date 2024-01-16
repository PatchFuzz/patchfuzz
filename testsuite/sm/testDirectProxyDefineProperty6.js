



var hits = 0;
var p = new Proxy({x: 1}, {
    defineProperty(t, k, desc) {
        
        hits++;
        return true;
    }
});

assertEq(Object.defineProperty(p, "x", {get: function () {}}), p);
assertEq(hits, 1);
assertEq(p.x, 1);
