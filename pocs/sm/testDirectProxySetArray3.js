var a = [0, 1, 2, 3];
var p = new Proxy(a, {
    defineProperty(t, id, desc) {
        hits++;

        
        
        
        print(Object.getOwnPropertyNames(desc).join(","), "value");
        print(desc.value, 2);
        return true;
    }
});
var hits = 0;
p.length = 2;
print(hits, 1);
print(a.length, 4);
print(a[2], 2);
