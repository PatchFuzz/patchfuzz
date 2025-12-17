function print(a) {
    if (!a)
        throw new Error("Bad assertion");
}

let p = Object.getOwnPropertyDescriptor(BigInt, "length");
print(p.enumerable === false);
print(p.writable === false);
print(p.configurable === true);
print(p.value === 1);

