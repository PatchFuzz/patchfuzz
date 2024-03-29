let assert = {
    sameValue: function(a, e) {
        if (a !== e)
            throw new Error("Expected: " + e + " but got: " + a);
    }
};

let obj = {};
let overrideSuper = false
class Base {
    constructor() {
        if (overrideSuper)
            return obj;
        return {};
    }
}

class C extends Base {
    #method() {
        return 'test';
    }

    static access(o) {
        return o.#method();
    }
}
noInline(C.access);

gc();
let c = new C(); 
c = null;

overrideSuper = true;
new C();
edenGC(); 
for (let i = 0; i < 10000; i++) {
    assert.sameValue(C.access(obj), 'test');
}

