function print(a, e) {
    if (a !== e)
        throw new Error("Expected: " + e + " but got: " + a);
}

function bitAnd(a, b) {
    return a & b;
}
noInline(bitAnd);

if (!jscOptions().useExecutableAllocationFuzz) {

    var o = { valueOf: () => 0b1101 };

    for (var i = 0; i < testLoopCount; i++)
        print(bitAnd(0b11, o), 0b1);

    print(numberOfDFGCompiles(bitAnd) <= 1, true);

    function bitOr(a, b) {
        return a | b;
    }
    noInline(bitOr);

    for (var i = 0; i < testLoopCount; i++)
        print(bitOr(0b11, o), 0b1111);

    print(numberOfDFGCompiles(bitOr) <= 1, true);

    function bitXor(a, b) {
        return a ^ b;
    }
    noInline(bitXor);

    for (var i = 0; i < testLoopCount; i++)
        print(bitXor(0b0011, o), 0b1110);

    print(numberOfDFGCompiles(bitXor) <= 1, true);

    function bitNot(a) {
        return ~a;
    }
    noInline(bitNot);

    for (var i = 0; i < testLoopCount; i++)
        print(bitNot(o), -14);

    print(numberOfDFGCompiles(bitNot) <= 1, true);

    function bitLShift(a, b) {
        return a << b;
    }
    noInline(bitLShift);

    for (var i = 0; i < testLoopCount; i++)
        print(bitLShift(o, 3), 0b1101000);

    print(numberOfDFGCompiles(bitLShift) <= 1, true);
}
