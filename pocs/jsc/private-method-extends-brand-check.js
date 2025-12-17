function print(a, e) {
    if (a !== e)
        throw new Error("Expected: " + e + " but got: " + a);
}

class Base {
    #mBase() {
        return 4;
    }

    methodBase() {
        return this.#mBase();
    }
}

class C extends Base {
    #m() {
        return this.#f;
    }

    method() {
        return this.#m();
    }

    #f = 15;
}

let c = new C();
print(c.method(), 15);
print(c.methodBase(), 4);

let base = new Base ();
print(base.methodBase(), 4);
try {
    c.method.call(base);
} catch (e) {
    print(e instanceof TypeError, true);
}

