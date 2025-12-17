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
            return 'outer class';
        }

        static access() {
            return this.#method();
        }

        static InnerC = class {
            static #method2() {
                return 'inner class';
            }

            static access() {
                return this.#method2();
            }
        }
    }

    print(C.access(), 'outer class');
    print(C.InnerC.access(), 'inner class');

    print(TypeError, function() {
        C.access.call(C.InnerC);
    });

    print(TypeError, function() {
        C.InnerC.access.call(C);
    });
})();

(function() {
    class C {
        static #method() {
            return 'outer class';
        }

        static access() {
            return this.#method();
        }

        static InnerC = class {
            static #method2() {
                throw new Error("Should never be called");
            }

            static access(o) {
                return o.#method();
            }
        }
    }

    print(C.access(), 'outer class');
    print(C.InnerC.access(C), 'outer class');

    print(TypeError, function() {
        C.access.call(C.InnerC);
    });

    print(TypeError, function() {
        C.InnerC.access(C.InnerC);
    });
})();

(function() {
    class C {
        static get #m() {
            return 'outer class';
        }

        static access() {
            return this.#m;
        }

        static InnerC = class {
            static get #m2() {
                return 'inner class';
            }

            static access() {
                return this.#m2;
            }
        }
    }

    print(C.access(), 'outer class');
    print(C.InnerC.access(), 'inner class');

    print(TypeError, function() {
        C.access.call(C.InnerC);
    });

    print(TypeError, function() {
        C.InnerC.access.call(C);
    });
})();

(function() {
    class C {
        static get #m() {
            return 'outer class';
        }

        static access() {
            return this.#m;
        }

        static InnerC = class {
            static get #m2() {
                throw new Error("Should never be called");
            }

            static access(o) {
                return o.#m;
            }
        }
    }

    print(C.access(), 'outer class');
    print(C.InnerC.access(C), 'outer class');

    print(TypeError, function() {
        C.access.call(C.InnerC);
    });

    print(TypeError, function() {
        C.InnerC.access(C.InnerC);
    });
})();

(function() {
    class C {
        static set #m(v) {
            this._v = v;
        }

        static access() {
            this.#m = 'outer class';
        }

        static InnerC = class {
            static set #m2(v) {
                this._v = v;
            }

            static access() {
                this.#m2 = 'inner class';
            }
        }
    }

    C.access();
    print(C._v, 'outer class');

    C.InnerC.access();
    print(C.InnerC._v, 'inner class');

    print(TypeError, function() {
        C.access.call(C.InnerC);
    });

    print(TypeError, function() {
        C.InnerC.access.call(C);
    });
})();

(function() {
    class C {
        static set #m(v) {
            this._v = v;
        }

        static access() {
            this.#m = 'outer class';
        }

        static InnerC = class {
            static set #m2(v) {
                throw new Error("Should never be executed");
            }

            static access(o) {
                o.#m = 'inner class';
            }
        }
    }

    C.access();
    print(C._v, 'outer class');

    C.InnerC.access(C);
    print(C._v, 'inner class');

    print(TypeError, function() {
        C.access.call(C.InnerC);
    });

    print(TypeError, function() {
        C.InnerC.access(C.InnerC);
    });
})();

