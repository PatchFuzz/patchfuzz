function print(a, message) {
    if (!a)
        throw new Error(message);
}

let a = (1n << 1048575n) - 1n;
a = (a << 1n) | 1n;

try {
    let b = a + 1n;
    print(false, "Should throw OutOfMemoryError, but executed without exception");
} catch(e) {
    print(e.message == "Out of memory: BigInt generated from this operation is too big", "Expected OutOfMemoryError, but got: " + e);
}

try {
    let b = a - (-1n);
    print(false, "Should throw OutOfMemoryError, but executed without exception");
} catch(e) {
    print(e.message == "Out of memory: BigInt generated from this operation is too big", "Expected OutOfMemoryError, but got: " + e);
}

try {
    let b = a * (-1n);
    print(false, "Should throw OutOfMemoryError, but executed without exception");
} catch(e) {
    print(e.message == "Out of memory: BigInt generated from this operation is too big", "Expected OutOfMemoryError, but got: " + e);
}

try {
    let b = a / a;
    print(false, "Should throw OutOfMemoryError, but executed without exception");
} catch(e) {
    print(e.message == "Out of memory: BigInt generated from this operation is too big", "Expected OutOfMemoryError, but got: " + e);
}

try {
    let b = -a & -1n;
    print(false, "Should throw OutOfMemoryError, but executed without exception");
} catch(e) {
    print(e.message == "Out of memory: BigInt generated from this operation is too big", "Expected OutOfMemoryError, but got: " + e);
}

try {
    let b = a ^ -1n;
    print(false, "Should throw OutOfMemoryError, but executed without exception");
} catch(e) {
    print(e.message == "Out of memory: BigInt generated from this operation is too big", "Expected OutOfMemoryError, but got: " + e);
}

