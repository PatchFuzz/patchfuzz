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

function classFactory() {
    return class {
        #method() {
            return 'test';
        }

        access() {
            return this.#method();
        }
    }
}

let C1 = classFactory();
let C2 = classFactory();

let c1 = new C1();
let c2 = new C2();

print(c1.access(), 'test');
print(TypeError, function () {
    c2.access.call(c1)
});

