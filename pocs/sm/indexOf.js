function toLatin1(s) {
    print(isLatin1(s), true);
    return s;
}
function testLastIndexOf() {
    var s1 = toLatin1("abcdefgh123456\u0081defg");
    var s2 = toLatin1("456\u0081de");

    
    print(s1.lastIndexOf(s1), 0);
    print(s1.lastIndexOf(s2), 11);
    print(s1.lastIndexOf(s2, 10), -1);
    print(s2.lastIndexOf(s1), -1);

    
    print(s1.lastIndexOf("abc\u1234"), -1);
    print(s1.lastIndexOf("def\u1234".substring(0, 3)), 15);
    print(s1.lastIndexOf("def\u1234".substring(0, 3), 9), 3);

    
    var s3 = "123456\u0081defg\u1123a456\u0081defg";
    print(isLatin1(s2), true);
    print(s3.lastIndexOf(s2), 13);
    print(s3.lastIndexOf(s2, 12), 3);
    print(s3.lastIndexOf(toLatin1("defg7")), -1);

    
    print(s3.lastIndexOf("\u1123a4"), 11);
    print(s3.lastIndexOf("\u1123a4", 10), -1);
    print(s3.lastIndexOf("\u1123a\u1098"), -1);
    print(s3.lastIndexOf(s3), 0);
}
testLastIndexOf();

function testIndexOf() {
    var s1 = toLatin1("abcdefgh123456d\u00AAefghi");
    var s2 = toLatin1("456d\u00AA");

    
    print(s1.indexOf(s1), 0);
    print(s1.indexOf(s2), 11);
    print(s1.indexOf(s2, 12), -1);
    print(s2.indexOf(s1), -1);

    
    print(s1.indexOf("abc\u1234"), -1);
    print(s1.indexOf("def\u1234".substring(0, 3)), 3);
    print(s1.indexOf("d\u00AAef\u1234".substring(0, 3), 9), 14);

    
    var s3 = "123456d\u00AAefg\u1123a456d\u00AAefg";
    print(isLatin1(s2), true);
    print(s3.indexOf(s2), 3);
    print(s3.indexOf(s2, 11), 13);
    print(s3.indexOf(toLatin1("d\u00AAefg7")), -1);

    
    print(s3.indexOf("\u1123a4"), 11);
    print(s3.indexOf("\u1123a4", 12), -1);
    print(s3.indexOf("\u1123a\u1098"), -1);
    print(s3.indexOf(s3), 0);
}
testIndexOf();

function testincludes() {
    var s1 = toLatin1("abcdefgh123456defghi\u00EEj");
    var s2 = toLatin1("456defghi\u00EE");

    
    print(s1.includes(s1), true);
    print(s1.includes(s2), true);
    print(s1.includes(s2, 12), false);
    print(s2.includes(s1), false);

    
    print(s1.includes("abc\u1234"), false);
    print(s1.includes("def\u1234".substring(0, 3)), true);
    print(s1.includes("def\u1234".substring(0, 3), 9), true);

    
    var s3 = "123456defg\u1123a456defghi\u00EEj";
    print(isLatin1(s2), true);
    print(s3.includes(s2), true);
    print(s3.includes(s2, 13), false);
    print(s3.includes(toLatin1("defg8")), false);

    
    print(s3.includes("\u1123a4"), true);
    print(s3.includes("\u1123a4", 11), false);
    print(s3.includes("\u1123a\u1098"), false);
    print(s3.includes(s3), true);
}
testincludes();

function testIndexOfBMH() {
    
    var s = "012345678901234567890123456789".repeat(20);
    var text = s + "abcdefghijklmnopqrst\u00C1uvwxyz";
    text.indexOf("333");

    var textL1 = toLatin1(text);
    var patL1 = toLatin1("cdefghijklmnopqrst\u00C1uvwx");

    
    print(textL1.indexOf(patL1), 602);
    print(textL1.indexOf(patL1, 603), -1);
    print(textL1.indexOf(textL1), 0);

    
    print(textL1.indexOf("cdefghijklmnopqrst\u00C1uvwxy"), 602);
    print(textL1.indexOf("cdefghijklmnopqrst\u00C1uvwxy", 603), -1);
    print(textL1.indexOf("cdefghijklmnopqrst\u00C1uvwxy\uaa00", -1), -1);

    
    var textTB = s + "abcdefghijklmnopqrst\u00C1uvwxyz\u1200";
    text.indexOf("333");
    print(textTB.indexOf(patL1), 602);
    print(textTB.indexOf(patL1, 603), -1);

    
    print(textTB.indexOf("defghijklmnopqrst\u00C1uvwxyz\u1200"), 603);
    print(textTB.indexOf("defghijklmnopqrst\u00C1uvwxyz\u1200", 604), -1);
    print(textTB.indexOf("defghijklmnopqrst\u00C1uvwxyz\u1201"), -1);
}
testIndexOfBMH();

function testIndexOfLargePattern() {
    
    
    
    var text = "012345678901234567890123456789".repeat(10) + "abcdefghijklmnopqrst\u00C1uvwxyz";
    text.indexOf("333"); 
    var pat = "012345678901234567890123456789".repeat(5) + "abcdefghijklmnopqr";
    pat.indexOf("333"); 

    
    text = toLatin1(text);
    pat = toLatin1(pat);
    print(text.indexOf(pat), 150);

    
    print(text.indexOf(pat + "\u1200"), -1);
    print(text.indexOf((pat + "\u1200").slice(0, -1)), 150);

    
    text = text + "\u1100";
    print(isLatin1(pat), true);
    print(text.indexOf(pat), 150);

    
    pat = pat + "st\u00C1uvwxyz\u1100";
    print(text.indexOf(pat), 150);
    print(text.indexOf(pat + "\u2000"), -1);
}
testIndexOfLargePattern();
