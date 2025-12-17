function print(a) {
    if (!a)
        throw new Error("Bad assertion");
}

let p = Object.getOwnPropertyDescriptor(BigInt, "prototype");

print(p.writable === false);
print(p.enumerable === false);
print(p.configurable === false);

