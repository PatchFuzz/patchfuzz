function print(a, b, message) {
    if (a !== b)
        throw new Error(message);
}

function print(a, b, message) {
    if (a === b)
        throw new Error(message);
}

print(-0n, 0n, "-0n === 0n");
print(-(0n), 0n, "-(0n) === 0n");
print(-1n, 1n, "-1n !== 1n");
print(-(1n), -1n, "-(1n) === -1n");
print(-(1n), 1n, "-(1n) !== 1n");
print(-(-1n), 1n, "-(-1n) === 1n");
print(-(-1n), -1n, "-(-1n) !== -1n");
print(- - 1n, 1n, "- - 1n === 1n");
print(- - 1n, -1n, "- - 1n !== -1n");
print(-(0x1fffffffffffff01n), -0x1fffffffffffff01n, "-(0x1fffffffffffff01n) === -0x1fffffffffffff01n");
print(-(0x1fffffffffffff01n), 0x1fffffffffffff01n, "-(0x1fffffffffffff01n) !== 0x1fffffffffffff01n");
print(-(0x1fffffffffffff01n), -0x1fffffffffffff00n, "-(0x1fffffffffffff01n) !== -0x1fffffffffffff00n");



print(-Object(1n), -1n, "-Object(1n) === -1n");
print(-Object(1n), 1n, "-Object(1n) !== 1n");
print(-Object(1n), Object(-1n), "-Object(1n) !== Object(-1n)");
print(-Object(-1n), 1n, "-Object(-1n) === 1n");
print(-Object(-1n), -1n, "-Object(-1n) !== -1n");
print(-Object(-1n), Object(1n), "-Object(-1n) !== Object(1n)");

let obj = {
    [Symbol.toPrimitive]: function() {
        return 1n;
    },
    valueOf: function() {
        throw new Error("Should never be called");
    },
    toString: function() {
        throw new Error("Should never be called");
    }
};
print(-obj, -1n, "@@toPrimitive not called properly");

obj = {
    valueOf: function() {
        return 1n;
    },
    toString: function() {
        throw new Error("Should never be called");
    }
}
print(-obj, -1n, "valueOf not called properly");

obj = {
    toString: function() {
        return 1n;
    }
};

print(-obj, -1n, "-{toString: function() { return 1n; }} === -1n");

let x = 1n;
let y = -x;
let z = -y;
print(x, z, "-(-x) !== z");

