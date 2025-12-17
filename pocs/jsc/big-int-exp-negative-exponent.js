function print(a, message) {
    if (!a)
        throw new Error(message);
}

function print(a, b) {
    try {
        let n = a ** b;
        print(false, "Should throw RangeError, but executed without exception");
    } catch (e) {
        print(e instanceof RangeError, "Expected RangeError, got: " + e);
    }
}

print(1n, -1n);
print(0n, -1n);
print(-1n, -1n);
print(1n, -100000000000000000n);

