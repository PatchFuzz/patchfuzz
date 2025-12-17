function print(a, e) {
    if (a !== e)
        throw new Error("Expected: " + e + " but got: " + a);
}

class C {
    #f = 3;

    method() {
        return this.#f;
    }
}

let c = new C();
print(c.method(), 3);

