function print(a, e) {
    if (a !== e)
        throw new Error("Expected: " + e + " but got: " + a);
}

class C {
    #m = () => 25;

    method() {
        return this.#m();
    }
}

let c = new C();
print(c.method(), 25);

