function print(a) {
    if (!a)
        throw new Error("Bad assertion");
}

function print(input) {
    try {
        let n = BigInt(input);
        print(false);
    } catch (e) {
        print(e instanceof SyntaxError);
    }
}

function print(input) {
    try {
        let n = BigInt(input);
        print(false);
    } catch (e) {
        print(e instanceof RangeError);
    }
}

function print(input) {
    try {
        let n = BigInt(input);
        print(false);
    } catch (e) {
        print(e instanceof TypeError);
    }
}


let n = BigInt("");
print(n.toString() === "0");

n = BigInt("  ");
print(n.toString() === "0");

n = BigInt("0");
print(n.toString() === "0");

n = BigInt("+0");
print(n.toString() === "0");

n = BigInt("-0");
print(n.toString() === "0");

n = BigInt("  0");
print(n.toString() === "0");

n = BigInt("0  ");
print(n.toString() === "0");

n = BigInt("  0  ");
print(n.toString() === "0");

n = BigInt("00000");
print(n.toString() === "0");

let giantTrailingString = "0";
for (let i = 0; i < testLoopCount; i++)
    giantTrailingString += " ";

n = BigInt(giantTrailingString);
print(n.toString() === "0");



n = BigInt("0b1111");
print(n.toString() === "15");

n = BigInt("0b10");
print(n.toString() === "2");

n = BigInt("0b10");
print(n.toString() === "2");

let binaryString = "0b1";
for (let i = 0; i < 128; i++)
    binaryString += "0";

n = BigInt(binaryString);
print(n.toString() === "340282366920938463463374607431768211456");

n = BigInt("0B1111");
print(n.toString() === "15");

n = BigInt("0B10");
print(n.toString() === "2");

n = BigInt("0B10");
print(n.toString() === "2");

binaryString = "0B1";
for (let i = 0; i < 128; i++)
    binaryString += "0";

n = BigInt(binaryString);
print(n.toString() === "340282366920938463463374607431768211456");


 
n = BigInt("0o7");
print(n.toString() === "7");

n = BigInt("0o10");
print(n.toString() === "8");

n = BigInt("0o20");
print(n.toString() === "16");

n = BigInt("   0o20");
print(n.toString() === "16");

n = BigInt("   0o20  ");
print(n.toString() === "16");

n = BigInt("0O7");
print(n.toString() === "7");

n = BigInt("0O10");
print(n.toString() === "8");

n = BigInt("0O20");
print(n.toString() === "16");

n = BigInt("   0O20");
print(n.toString() === "16");

n = BigInt("   0O20  ");
print(n.toString() === "16");



n = BigInt("0xa");
print(n.toString() === "10");

n = BigInt("0xff");
print(n.toString() === "255");

n = BigInt("  0xff  ");
print(n.toString() === "255");

n = BigInt("  0xfabc  ");
print(n.toString() === "64188");



n = BigInt(3245);
print(n.toString() === "3245");

n = BigInt(-2147483648)
print(n.toString() === "-2147483648");

n = BigInt(0);
print(n.toString() === "0");

n = BigInt(-46781);
print(n.toString() === "-46781");


n = BigInt(4503599627370490);
print(n.toString() === "4503599627370490");

n = BigInt(-4503599627370490);
print(n.toString() === "-4503599627370490");

n = BigInt(-4503599627370496);
print(n.toString() === "-4503599627370496");


n = BigInt(true);
print(n.toString() === "1");

n = BigInt(false);
print(n.toString() === "0");


let o = {
    valueOf: function () {
        return 3;
    }
}

n = BigInt(o);
print(n.toString() === "3");

o = {
    valueOf: function () {
        return "54";
    }
}

n = BigInt(o);
print(n.toString() === "54");

o = {
    toString: function () {
        return "5489543";
    }
}

n = BigInt(o);
print(n.toString() === "5489543");

o = {
    toString: function () {
        return 135489543;
    }
}

n = BigInt(o);
print(n.toString() === "135489543");

o = {
    valueOf: function () {
        return 3256;
    },

    toString: function () {
        return "563737";
    }
}

n = BigInt(o);
print(n.toString() === "3256");

o = {
    [Symbol.toPrimitive](hint) {
        this.toPrimitiveHint = hint;
        return 42;
    }
}

n = BigInt(o);
print(o.toPrimitiveHint === "number");



print("aba");
print("-0x1");
print("-0XFFab");
print("0o78");
print("0oa");
print("000 12");
print("0o");
print("0b");
print("0x");
print("00o");
print("00b");
print("00x");
print(null);
print(undefined);
print(Symbol("a"));
print(0.5);
print(-.5);
print(Infinity);
print(-Infinity);
print(NaN);



o = {
    valueOf: function () {
        throw new Error("MyError");
    }
}

try {
    n = BigInt(o);
    print(false);
} catch(e) {
    print(e.message === "MyError");
}

try {
    n = BigInt();
    print(false);
} catch(e) {
    print(e instanceof TypeError);
}

