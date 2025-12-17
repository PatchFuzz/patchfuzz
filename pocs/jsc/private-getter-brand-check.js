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

(function () {
    let createAndInstantiateClass = function () {
        class C {
            get #m() { return 'test'; }

            access(o) {
                return o.#m;
            }
        }

        return new C();
    }

    let c1 = createAndInstantiateClass();
    let c2 = createAndInstantiateClass();

    print(c1.access(c1), 'test');
    print(c2.access(c2), 'test');

    print(TypeError, function() {
        c1.access(c2);
    });

    print(TypeError, function() {
        c2.access(c1);
    });
})();

(function () {
    class S {
        get #m() { return 'super class'; }

        superAccess() { return this.#m; }
    }

    class C extends S {
        get #m() { return 'subclass'; }

        access() {
            return this.#m;
        }
    }

    let c = new C();

    print(c.access(), 'subclass');
    print(c.superAccess(), 'super class');

    let s = new S();
    print(s.superAccess(), 'super class');
    print(TypeError, function() {
        c.access.call(s);
    });
})();

(function () {
    class C {
        get #m() { return 'test'; }

        access(o) {
            return o.#m;
        }
    }

    let c = new C();
    print(c.access(c), 'test');

    let o = {};
    print(TypeError, function() {
        c.access(o);
    });
})();

