function print(a, e) {
    if (a !== e)
        throw new Error("Expected: " + e + " but got: " + a);
}

(() => {
    class Base {
        C = class {
            method() {
                return this.#mBase();
            }
        }

        #mBase() {
            return 4;
        }
    }

    let base = new Base();
    let c = new base.C();
    print(c.method.call(base), 4);

    try {
        c.method();
    } catch (e) {
        print(e instanceof TypeError, true);
    }
})();



(() => {
    class Base {
        method() {
            return this.#m();
        }

        C = class {
            method(o) {
                return o.#m();
            }

            #m() {
                return this.foo;
            }

            foo = 4;
        };

        #m() {
            return "foo";
        }
    }

    let base = new Base();
    let c = new base.C();
    print(c.method(c), 4);
    print(base.method(), "foo");

    try {
        c.method(base);
    } catch (e) {
        print(e instanceof TypeError, true);
    }
})();

