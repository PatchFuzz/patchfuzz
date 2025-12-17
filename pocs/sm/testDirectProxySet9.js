var t = {x: 1};
var p = new Proxy(t, {
    defineProperty(t, id, desc) {
        hits++;

        
        
        
        print(Object.getOwnPropertyNames(desc).join(","), "value");
        print(desc.value, 42);
        return true;
    }
});
var hits = 0;
p.x = 42;
print(hits, 1);
print(t.x, 1);
