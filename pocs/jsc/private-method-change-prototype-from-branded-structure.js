let assert = {
    sameValue: function (lhs, rhs) {
        if (lhs !== rhs)
            throw new Error("Expected: " + lhs + " bug got: " + rhs);
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

Object.setPrototypeOf(c1, null);

print(c1.access, undefined);
print(C.prototype.access.call(c1), 'test');
print(TypeError, function () {
    c1.access.call({});
});

