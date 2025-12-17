function print(a) {
    if (!a)
        throw new Error("Bad assertion");
}

(() => {
    let p = Object.getOwnPropertyDescriptor(BigInt.prototype, "toString");

    print(p.enumerable === false);
    print(p.configurable === true);
    print(p.writable === true);
})();

(() => {
    let p = Object.getOwnPropertyDescriptor(BigInt.prototype, "toLocaleString");

    print(p.enumerable === false);
    print(p.configurable === true);
    print(p.writable === true);
})();

(() => {
    let p = Object.getOwnPropertyDescriptor(BigInt.prototype, "valueOf");

    print(p.enumerable === false);
    print(p.configurable === true);
    print(p.writable === true);
})();

(() => {
    let p = Object.getOwnPropertyDescriptor(BigInt.prototype, Symbol.toStringTag);

    print(p.enumerable === false);
    print(p.configurable === true);
    print(p.writable === false);
})();

