function print(a) {
    if (!a)
        throw new Error("Bad assertion");
}

let p = Object.getOwnPropertyDescriptor(BigInt, "name");
print(p.enumerable === false);
print(p.writable === false);
print(p.configurable === true);
print(p.value === "BigInt");

