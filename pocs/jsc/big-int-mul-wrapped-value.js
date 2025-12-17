assert = {
    sameValue: function (input, expected, message) {
        if (input !== expected)
            throw new Error(message);
    }
};

function testMul(x, y, z, message) {
    print(x * y, z, message);
    print(y * x, z, message);
}

testMul(Object(2n), 1n, 2n, "ToPrimitive: unbox object with internal slot");

let o = {
    [Symbol.toPrimitive]: function() {
        return 2n;
    }
};
testMul(o, 1n, 2n, "ToPrimitive: @@toPrimitive");

o = {
    valueOf: function() {
        return 2n;
    }
};
testMul(o, 1n, 2n, "ToPrimitive: valueOf");

o = {
    toString: function() {
        return 2n;
    }
}
testMul(o, 1n, 2n, "ToPrimitive: toString");

