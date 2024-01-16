


var t = {x: 1};
var p = new Proxy(t, {
    defineProperty(t, id, desc) {
        hits++;

        
        
        
        assertEq(Object.getOwnPropertyNames(desc).join(","), "value");
        assertEq(desc.value, 42);
        return true;
    }
});
var hits = 0;
p.x = 42;
assertEq(hits, 1);
assertEq(t.x, 1);
