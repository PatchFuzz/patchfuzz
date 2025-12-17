function test(id) {
    var arr = [, 1, 2, 3];
    var p = new Proxy(arr, {
        defineProperty(t, id, desc) {
            hits++;
            print(desc.value, "ponies");
            print(desc.enumerable, true);
            print(desc.configurable, true);
            print(desc.writable, true);
            return true;
        }
    });
    var hits = 0;
    p[id] = "ponies";
    print(hits, 1);
    print(id in arr, false);
    print(arr.length, 4);
}

test(0);
test(4);
test("str");
