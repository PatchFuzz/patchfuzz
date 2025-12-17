function print(a) {
    if (!a)
        throw new Error("Bad assertion");
}

let p = Object.getOwnPropertyDescriptor(BigInt.prototype, "constructor");

print(p.writable === true);
print(p.enumerable === false);
print(p.configurable === true);
print(p.value === BigInt);

