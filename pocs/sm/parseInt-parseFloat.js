function toLatin1(s) {
    print(isLatin1(s), true);
    return s;
}
function testParseInt() {
    
    print(parseInt(toLatin1("12345abc")), 12345);
    print(parseInt(toLatin1("0x5")), 0x5);
    print(parseInt(toLatin1("-123")), -123);
    print(parseInt(toLatin1("xyz")), NaN);
    print(parseInt(toLatin1("1234GHI"), 17), 94298);
    print(parseInt(toLatin1("9007199254749999")), 9007199254750000);
    print(parseInt(toLatin1("  9007199254749998"), 16), 10378291982571444000);

    
    print(parseInt("12345abc\u1200"), 12345);
    print(parseInt("0x5\u1200"), 0x5);
    print(parseInt("  -123\u1200"), -123);
    print(parseInt("\u1200"), NaN);
    print(parseInt("1234GHI\u1200", 17), 94298);
    print(parseInt("9007199254749999\u1200"), 9007199254750000);
    print(parseInt("  9007199254749998\u1200", 16), 10378291982571444000);
}
testParseInt();

function testParseFloat() {
    
    print(parseFloat(toLatin1("3.1415")), 3.1415);
    print(parseFloat(toLatin1("  -1234")), -1234);
    print(parseFloat(toLatin1("\u00AA")), NaN);
    print(parseFloat(toLatin1("Infinityabc")), Infinity);
    print(parseFloat(toLatin1("-Infinity")), -Infinity);
    print(parseFloat(toLatin1("\t\t\t+Infinity")), Infinity);

    
    print(parseFloat("3.1415\u0FFF"), 3.1415);
    print(parseFloat("  -1234\u0FFF"), -1234);
    print(parseFloat("\u00AA\u0FFF"), NaN);
    print(parseFloat("Infinityabc\u0FFF"), Infinity);
    print(parseFloat("-Infinity\u0FFF"), -Infinity);
    print(parseFloat("\t\t\t+Infinity\u0FFF"), Infinity);
}
testParseFloat();
