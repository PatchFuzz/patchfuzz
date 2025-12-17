var error = undefined;
try {
    eval(`class a {
        static #x() { }
        [b.#x]
        }`);
} catch (e) {
    error = e;
}

print(error instanceof ReferenceError, true);

var error = undefined;
try {
    eval(`class Base {};

    class B extends Base {
        static #x() { }
        [Base.#x] = 1;
        constructor() {
            super();
        }
    }`);
} catch (e) {
    error = e;
}

print(error instanceof TypeError, true);
