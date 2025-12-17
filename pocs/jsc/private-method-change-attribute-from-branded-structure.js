let assert = {
    sameValue: function (actual, expected) {
        if (actual !== expected)
            throw new Error("Expected: " + expected + " but got: " + actual);
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
c1.foo = 'test';
print(c1.access(), 'test');
print(c1.foo, 'test');
print(TypeError, function () {
    c1.access.call({});
});

Object.defineProperty(c1, 'foo', {
    writable: false,
    enumerable: false
});

print(c1.access(), 'test');
print(TypeError, function () {
    c1.access.call({});
});

let descriptor = Object.getOwnPropertyDescriptor(c1, 'foo');

print(descriptor.value, 'test');
print(descriptor.enumerable, false);
print(descriptor.writable, false);

