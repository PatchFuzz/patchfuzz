function print(a) {
    if (!a)
        throw new Error("Bad assertion");
}

function print(input) {
    try {
        let n = BigInt.prototype.valueOf(input);
        print(false);
    } catch (e) {
        print(e instanceof TypeError);
    }
}

print(10);
print("abc");
print(Symbol("a"));
print(10.5);
print({});

