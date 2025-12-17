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
        static #method() {
            throw new Error("Should never be called");
        }

        static access() {
            return this.#method++;
        }
    }

    print(TypeError, function() {
        C.access();
    });
})();

(function() {
    let executedGetter = false;
    class C {
        static get #m() {
            executedGetter = true;
        }

        static access() {
            return this.#m++;
        }
    }

    print(TypeError, function() {
        C.access();
    });

    print(true, executedGetter);
})();

(function() {
    class C {
        static set #m(v) {
            throw new Error("Should never be executed");
        }

        static access() {
            return this.#m++;
        }
    }

    print(TypeError, function() {
        C.access();
    });
})();

(function() {
    class C {
        static set #m(v) {
            print(5, v);
        }

        static get #m() {
            return 4;
        }

        static access() {
            return this.#m++;
        }
    }

    print(4, C.access());
})();



(function() {
    class C {
        static #method() {
            throw new Error("Should never be called");
        }

        static access() {
            this.#method--;
        }
    }

    print(TypeError, function() {
        C.access();
    });
})();

(function() {
    let executedGetter = false;
    class C {
        static get #m() {
            executedGetter = true;
        }

        static access() {
            this.#m--;
        }
    }

    print(TypeError, function() {
        C.access();
    });

    print(true, executedGetter);
})();

(function() {
    class C {
        static set #m(v) {
            throw new Error("Should never be executed");
        }

        static access() {
            this.#m--;
        }
    }

    print(TypeError, function() {
        C.access();
    });
})();

(function() {
    class C {
        static set #m(v) {
            print(3, v);
        }

        static get #m() {
            return 4;
        }

        static access() {
            this.#m--;
        }
    }

    C.access();
})();

