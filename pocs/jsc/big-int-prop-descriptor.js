function print(a) {
    if (!a)
        throw new Error("Bad assertion");
}

let p = Object.getOwnPropertyDescriptor(this, "BigInt");
print(p.writable === true);
print(p.enumerable === false);
print(p.configurable === true);

