


var a = [0, 1, 2, 3];
var p = new Proxy(a, {
    defineProperty(t, id, desc) {
        hits++;

        
        
        
        assertEq(Object.getOwnPropertyNames(desc).join(","), "value");
        assertEq(desc.value, 2);
        return true;
    }
});
var hits = 0;
p.length = 2;
assertEq(hits, 1);
assertEq(a.length, 4);
assertEq(a[2], 2);
