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

(function() {
    class C {
        #method() {
            throw new Error("Should never be called");
        }

        access() {
            return ++this.#method;
        }
    }

    let c = new C();
    print(TypeError, function() {
        c.access();
    });
})();

(function() {
    let executedGetter = false;
    class C {
        get #m() {
            executedGetter = true;
        }

        access() {
            return ++this.#m;
        }
    }

    let c = new C();
    print(TypeError, function() {
        c.access();
    });

    print(true, executedGetter);
})();

(function() {
    class C {
        set #m(v) {
            throw new Error("Should never be executed");
        }

        access() {
            return ++this.#m;
        }
    }

    let c = new C();
    print(TypeError, function() {
        c.access();
    });
})();

(function() {
    class C {
        set #m(v) {
            print(5, v);
        }

        get #m() {
            return 4;
        }

        access() {
            return ++this.#m;
        }
    }

    let c = new C();
    print(5, c.access());
})();



(function() {
    class C {
        #method() {
            throw new Error("Should never be called");
        }

        access() {
            --this.#method;
        }
    }

    let c = new C();
    print(TypeError, function() {
        c.access();
    });
})();

(function() {
    let executedGetter = false;
    class C {
        get #m() {
            executedGetter = true;
        }

        access() {
            --this.#m;
        }
    }

    let c = new C();
    print(TypeError, function() {
        c.access();
    });

    print(true, executedGetter);
})();

(function() {
    class C {
        set #m(v) {
            throw new Error("Should never be executed");
        }

        access() {
            --this.#m;
        }
    }

    let c = new C();
    print(TypeError, function() {
        c.access();
    });
})();

(function() {
    class C {
        set #m(v) {
            print(3, v);
        }

        get #m() {
            return 4;
        }

        access() {
            --this.#m;
        }
    }

    let c = new C();
    c.access();
})();

