function toLatin1(s) {
    print(isLatin1(s), true);
    return s;
}
function testStartsWith() {
    var s1 = toLatin1("abc\u0099def");
    var s2 = toLatin1("abc\u0099d");
    var s3 = toLatin1("abc\u0098d");
    var s4 = toLatin1("bc\u0099");

    
    print(s1.startsWith(s2), true);
    print(s1.startsWith(s3), false);
    print(s1.startsWith(s4), false);
    print(s1.startsWith(s4, 1), true);
    print(s1.startsWith(s1), true);

    
    print(s1.startsWith("abc\u0099\u1200".slice(0, -1)), true);
    print(s1.startsWith("abc\u0099e\u1200".slice(0, -1)), false);
    print(s1.startsWith("bc\u0099\u1200".slice(0, -1), 1), true);
    print(s1.startsWith("\u1200"), false);

    
    var s5 = "abc\u0099de\u1200";
    print(s5.startsWith(s1), false);
    print(s5.startsWith(s2), true);
    print(s5.startsWith(s4), false);
    print(s5.startsWith(s4, 1), true);

    
    print(s5.startsWith(s5), true);
    print(s5.startsWith("\u1200"), false);
    print(s5.startsWith("\u1200", 6), true);
}
testStartsWith();

function testEndsWith() {
    var s1 = toLatin1("zabc\u0099defg");
    var s2 = toLatin1("\u0099defg");
    var s3 = toLatin1("\u0098defg");
    var s4 = toLatin1("zabc\u0099def");

    
    print(s1.endsWith(s2), true);
    print(s1.endsWith(s3), false);
    print(s1.endsWith(s4), false);
    print(s1.endsWith(s4, 8), true);
    print(s1.endsWith(s1), true);

    
    print(s1.endsWith("abc\u0099defg\u1200".slice(0, -1)), true);
    print(s1.endsWith("\u1100efg\u1200".slice(0, -1)), false);
    print(s1.endsWith("bc\u0099\u1200".slice(0, -1), 5), true);
    print(s1.endsWith("\u1200"), false);

    
    var s5 = "\u1200zabc\u0099defg";
    print(s5.endsWith(s1), true);
    print(s5.endsWith(s2), true);
    print(s5.endsWith(s4), false);
    print(s5.endsWith(s4, 9), true);

    
    print(s5.endsWith(s5), true);
    print(s5.endsWith("\u1200"), false);
    print(s5.endsWith("\u1200za", 3), true);
}
testEndsWith();
