var C = {};
var B = new Proxy(C, {
    get() { throw "FAIL"; },
    getOwnPropertyDescriptor() { throw "FAIL"; },
    has() { throw "FAIL"; },
    defineProperty() { throw "FAIL"; },
    set(target, id, value, receiver) {
        hits++;
        print(target, C);
        print(id, "x");
        print(value, 3);
        print(receiver, A);
        return true;
    }
});
var A = Object.create(B);

var hits = 0;
A.x = 3;
print(hits, 1);
