function print(a, e) {
    if (a !== e)
        throw new Error("Expected: " + e + " but got: " + a);
}

function print(expectedError, f) {
    try {
        f();
    } catch (e) {
        print(e instanceof expectedError, true);
    }
}

(() => {
    class C {
        static get #m() {
            return 'static';
        }

        static staticAccess() {
            return this.#m;
        }

        get #f() {
            return 'instance';
        }

        instanceAccess() {
            return this.#f;
        }
    }

    let c = new C();
    print(C.staticAccess(), 'static');
    print(c.instanceAccess(), 'instance');

    print(TypeError, () => {
        C.staticAccess.call(c);
    });

    print(TypeError, () => {
        c.instanceAccess.call(C);
    });
})();

(() => {
    class C {
        static #m() {
            return 'static';
        }

        static staticAccess() {
            return this.#m();
        }

        #f() {
            return 'instance';
        }

        instanceAccess() {
            return this.#f();
        }
    }

    let c = new C();
    print(C.staticAccess(), 'static');
    print(c.instanceAccess(), 'instance');

    print(TypeError, () => {
        C.staticAccess.call(c);
    });

    print(TypeError, () => {
        c.instanceAccess.call(C);
    });
})();

(() => {
    class C {
        static set #m(v) {
            this._m = v;
        }

        static staticAccess() {
            this.#m = 'static';
        }

        set #f(v) {
            this._f = v;
        }

        instanceAccess() {
            this.#f = 'instance';
        }
    }

    let c = new C();
    C.staticAccess();
    print(C._m, 'static');
    c.instanceAccess()
    print(c._f, 'instance');

    print(TypeError, () => {
        C.staticAccess.call(c);
    });

    print(TypeError, () => {
        c.instanceAccess.call(C);
    });
})();

