function print(a, message) {
    if (!a)
        throw new Error(message);
}

function print(a, b, message) {
    try {
        let n = a / b;
        print(false, message + ": Should throw TypeError, but executed without exception");
    } catch (e) {
        print(e instanceof TypeError, message + ": expected TypeError, got: " + e);
    }
}

print(30n, "foo", "BigInt / String");
print("bar", 18757382984821n, "String / BigInt");
print(30n, Symbol("foo"), "BigInt / Symbol");
print(Symbol("bar"), 18757382984821n, "Symbol / BigInt");
print(30n, 3320, "BigInt / Int32");
print(33256, 18757382984821n, "Int32 / BigInt");
print(30n, 0.543, "BigInt / Double");
print(230.19293, 18757382984821n, "Double / BigInt");
print(30n, NaN, "BigInt / NaN");
print(NaN, 18757382984821n, "NaN / BigInt");
print(30n, NaN, "BigInt / NaN");
print(NaN, 18757382984821n, "NaN / BigInt");
print(30n, +Infinity, "BigInt / NaN");
print(+Infinity, 18757382984821n, "NaN / BigInt");
print(30n, -Infinity, "BigInt / -Infinity");
print(-Infinity, 18757382984821n, "-Infinity / BigInt");
print(30n, null, "BigInt / null");
print(null, 18757382984821n, "null / BigInt");
print(30n, undefined, "BigInt / undefined");
print(undefined, 18757382984821n, "undefined / BigInt");
print(30n, true, "BigInt * true");
print(true, 18757382984821n, "true / BigInt");
print(30n, false, "BigInt / false");
print(false, 18757382984821n, "false / BigInt");



let o = {
    valueOf: function () { return Symbol("Foo"); }
};

print(30n, o, "BigInt / Object.valueOf returning Symbol");
print(o, 18757382984821n, "Object.valueOf returning Symbol / BigInt");

o = {
    valueOf: function () { return 33256; }
};

print(30n, o, "BigInt / Object.valueOf returning Int32");
print(o, 18757382984821n, "Object.valueOf returning Int32 / BigInt");

o = {
    valueOf: function () { return 0.453; }
};

print(30n, o, "BigInt / Object.valueOf returning Double");
print(o, 18757382984821n, "Object.valueOf returning Double / BigInt");

o = {
    toString: function () { return Symbol("Foo"); }
};

print(30n, o, "BigInt / Object.toString returning Symbol");
print(o, 18757382984821n, "Object.toString returning Symbol / BigInt");

o = {
    toString: function () { return 33256; }
};

print(30n, o, "BigInt / Object.toString returning Int32");
print(o, 18757382984821n, "Object.toString returning Int32 / BigInt");

o = {
    toString: function () { return 0.453; }
};

print(30n, o, "BigInt / Object.toString returning Double");
print(o, 18757382984821n, "Object.toString returning Double / BigInt");

o = {
    [Symbol.toPrimitive]: function () { return Symbol("Foo"); }
};

print(30n, o, "BigInt / Object.@@toPrimitive returning Symbol");
print(o, 18757382984821n, "Object.@@toPrimitive returning Symbol / BigInt");

o = {
    [Symbol.toPrimitive]: function () { return 33256; }
};

print(30n, o, "BigInt / Object.@@toPrimitive returning Int32");
print(o, 18757382984821n, "Object.@@toPrimitive returning Int32 / BigInt");

o = {
    [Symbol.toPrimitive]: function () { return 0.453; }
};

print(30n, o, "BigInt / Object.@@toPrimitive returning Double");
print(o, 18757382984821n, "Object.@@toPrimitive returning Double / BigInt");

