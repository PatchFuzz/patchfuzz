function print(a, message) {
    if (!a)
        throw new Error(message);
}

function print(a, b, message) {
    try {
        let n = a - b;
        print(false, message + ": Should throw TypeError, but executed without exception");
    } catch (e) {
        print(e instanceof TypeError, message + ": expected TypeError, got: " + e);
    }
}

print(30n, Symbol("foo"), "BingInt - Symbol");
print(Symbol("bar"), 18757382984821n, "Symbol - BigInt");
print(30n, 3320, "BingInt - Int32");
print(33256, 18757382984821n, "Int32 - BigInt");
print(30n, 0.543, "BingInt - Double");
print(230.19293, 18757382984821n, "Double - BigInt");
print(18757382984821n, "abc", "BigInt - String");
print("def", 18757382984821n, "String - BigInt");
print(18757382984821n, "", "BigInt - Empty String");
print("", 18757382984821n, "Empty - BigInt");
print(18757382984821n, NaN, "BigInt - NaN");
print(NaN, 18757382984821n, "NaN - BigInt");
print(18757382984821n, undefined, "BigInt - undefined");
print(undefined, 18757382984821n, "undefined - BigInt");
print(18757382984821n, true, "BigInt - true");
print(true, 18757382984821n, "true - BigInt");
print(18757382984821n, false, "BigInt - false");
print(false, 18757382984821n, "false - BigInt");
print(18757382984821n, +Infinity, "BigInt - Infinity");
print(+Infinity, 18757382984821n, "Infinity - BigInt");
print(18757382984821n, -Infinity, "BigInt - -Infinity");
print(-Infinity, 18757382984821n, "-Infinity - BigInt");



let o = {
    valueOf: function () { return Symbol("Foo"); }
};

print(30n, o, "BingInt - Object.valueOf returning Symbol");
print(o, 18757382984821n, "Object.valueOf returning Symbol - BigInt");

o = {
    valueOf: function () { return 33256; }
};

print(30n, o, "BingInt - Object.valueOf returning Int32");
print(o, 18757382984821n, "Object.valueOf returning Int32 - BigInt");

o = {
    valueOf: function () { return 0.453; }
};

print(30n, o, "BingInt - Object.valueOf returning Double");
print(o, 18757382984821n, "Object.valueOf returning Double - BigInt");

o = {
    valueOf: function () { return ""; }
};

print(30n, o, "BingInt - Object.valueOf returning String");
print(o, 18757382984821n, "Object.valueOf returning String - BigInt");

o = {
    toString: function () { return Symbol("Foo"); }
};

print(30n, o, "BingInt - Object.toString returning Symbol");
print(o, 18757382984821n, "Object.toString returning Symbol - BigInt");

o = {
    toString: function () { return 33256; }
};

print(30n, o, "BingInt - Object.toString returning Int32");
print(o, 18757382984821n, "Object.toString returning Int32 - BigInt");

o = {
    toString: function () { return 0.453; }
};

print(30n, o, "BingInt - Object.toString returning Double");
print(o, 18757382984821n, "Object.toString returning Double - BigInt");

o = {
    toString: function () { return "abc"; }
};

print(30n, o, "BingInt - Object.toString returning String");
print(o, 18757382984821n, "Object.toString returning String - BigInt");

o = {
    [Symbol.toPrimitive]: function () { return Symbol("Foo"); }
};

print(30n, o, "BingInt - Object.@@toPrimitive returning Symbol");
print(o, 18757382984821n, "Object.@@toPrimitive returning Symbol - BigInt");

o = {
    [Symbol.toPrimitive]: function () { return 33256; }
};

print(30n, o, "BingInt - Object.@@toPrimitive returning Int32");
print(o, 18757382984821n, "Object.@@toPrimitive returning Int32 - BigInt");

o = {
    [Symbol.toPrimitive]: function () { return 0.453; }
};

print(30n, o, "BingInt - Object.@@toPrimitive returning Double");
print(o, 18757382984821n, "Object.@@toPrimitive returning Double - BigInt");

o = {
    [Symbol.toPrimitive]: function () { return "Abc"; }
};

print(30n, o, "BingInt - Object.@@toPrimitive returning String");
print(o, 18757382984821n, "Object.@@toPrimitive returning String - BigInt");

