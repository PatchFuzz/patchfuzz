function print(a, message) {
    if (!a)
        throw new Error(message);
}

function print(a, b, message) {
    try {
        let n = a << b;
        print(false, message + ": Should throw RangeError, but executed without exception");
    } catch (e) {
        print(e instanceof Error, message + ": expected Error , got: " + e);
    }
}

let a = 1n << 64n;
print(1n, a, "Left shift by " + a);

a = 1n << 30n;
print(1n, a, "Left shift by " + a);

