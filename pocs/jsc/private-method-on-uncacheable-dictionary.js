let assert = {
    sameValue: function (actual, expected) {
        if (actual !== expected)
            throw new Error("Expected: " + actual + " bug got: " + expected);
    },

    throws: function (expectedError, op) {
        try {
          op();
        } catch(e) {
            if (!(e instanceof expectedError))
                throw new Error("Expected to throw: " + expectedError + " but threw: " + e);
        }
    }
};

class C {
    #m() { return 'test'; }

    access() {
        return this.#m();
    }
}

let c1 = new C();
print(c1.access(), 'test');
print(TypeError, function () {
    c1.access.call({});
});

Object.freeze(c1);

print(c1.access(), 'test');
print(TypeError, function () {
    c1.access.call({});
});


let frozenObject = {};
Object.freeze(frozenObject);

class Base {
    constructor() {
        return frozenObject;
    }
}

class D extends Base {
    #m() { return 'test D'; }

    static access(o) {
        return o.#m();
    }
}

let d = new D();

print(D.access(d), 'test D');
print(TypeError, function () {
    D.access({});
});

