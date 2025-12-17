function print(a) {
    if (!a)
        throw new Error("Bad assertion");
}

let v = 10n;
print(v.toString() === "10");
print(v.toString(2) === "1010");
print(v.toString(3) === "101");
print(v.toString(8) === "12");
print(v.toString(16) === "a");
print(v.toString(32) === "a");

v = 191561942608236107294793378393788647952342390272950271n;
print(v.toString() === "191561942608236107294793378393788647952342390272950271");
print(v.toString(2) === "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111");
print(v.toString(3) === "2002122121011101220102010210020102000210011100122221002112102021022221102202020101221000021200201121121100121121");
print(v.toString(8) === "77777777777777777777777777777777777777777777777777777777777");
print(v.toString(16) === "1ffffffffffffffffffffffffffffffffffffffffffff");
print(v.toString(32) === "3vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv");

v = -10n;
print(v.toString() === "-10");
print(v.toString(2) === "-1010");
print(v.toString(3) === "-101");
print(v.toString(8) === "-12");
print(v.toString(16) === "-a");
print(v.toString(32) === "-a");

v = -191561942608236107294793378393788647952342390272950271n;
print(v.toString() === "-191561942608236107294793378393788647952342390272950271");
print(v.toString(2) === "-111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111");
print(v.toString(3) === "-2002122121011101220102010210020102000210011100122221002112102021022221102202020101221000021200201121121100121121");
print(v.toString(8) === "-77777777777777777777777777777777777777777777777777777777777");
print(v.toString(16) === "-1ffffffffffffffffffffffffffffffffffffffffffff");
print(v.toString(32) === "-3vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv");



function testInvalidRadix(radix) {
    try {
        v.toString(radix);
        print(false);
    } catch(e) {
        print(e instanceof RangeError);
    }
}

testInvalidRadix(-10);
testInvalidRadix(-1);
testInvalidRadix(0);
testInvalidRadix(1);
testInvalidRadix(37);
testInvalidRadix(4294967312);

