function f(a, b, c, ...rest) {
    print(a, 1);
    print(b, undefined);
    print(c, undefined);
    print(Array.isArray(rest), true);
    print(rest.length, 0);
    print(Object.getPrototypeOf(rest), Array.prototype);
}
f(1);
