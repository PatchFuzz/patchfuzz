


function test(arr) {
    var p = new Proxy(arr, {
        defineProperty(t, id, desc) {
            hits++;

            
            
            
            assertEq(Object.getOwnPropertyNames(desc).join(","), "value");
            assertEq(desc.value, "ponies");
            return true;
        }
    });
    var hits = 0;
    p[0] = "ponies";
    assertEq(hits, 1);
    assertEq(arr[0], 123);
}

test([123]);
test(new Int32Array([123]));
