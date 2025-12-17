function test(arr) {
    var p = new Proxy(arr, {
        defineProperty(t, id, desc) {
            hits++;

            
            
            
            print(Object.getOwnPropertyNames(desc).join(","), "value");
            print(desc.value, "ponies");
            return true;
        }
    });
    var hits = 0;
    p[0] = "ponies";
    print(hits, 1);
    print(arr[0], 123);
}

test([123]);
test(new Int32Array([123]));
