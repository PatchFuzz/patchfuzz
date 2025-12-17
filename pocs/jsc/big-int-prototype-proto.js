function print(a) {
    if (!a)
        throw new Error("Bad assertion");
}

let proto = Object.getPrototypeOf(BigInt.prototype);

print(proto === Object.prototype);

