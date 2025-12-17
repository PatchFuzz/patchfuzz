function print(a) {
    if (!a)
        throw new Error("Bad assertion");
}

(() => {
    let p = Object.getOwnPropertyDescriptor(BigInt, "asUintN");

    print(p.enumerable === false);
    print(p.configurable === true);
    print(p.writable === true);
})();

(() => {
    let p = Object.getOwnPropertyDescriptor(BigInt, "asIntN");

    print(p.enumerable === false);
    print(p.configurable === true);
    print(p.writable === true);
})();

