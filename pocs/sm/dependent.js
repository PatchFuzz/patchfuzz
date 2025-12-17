function testSubstrLatin1() {
    var s1 = "abcdefghijklmnopqrstuvwxyz12345678900000a";

    
    print(s1.substr(s1.length - 1), "a");
    print(s1.substr(s1.length - 2), "0a");
    print(s1.substr(26, 3), "123");

    
    var s2 = s1.substr(3, 5);
    print(isLatin1(s2), true);
    print(s2, "defgh");
    s2 = s1.substr(0, 20);
    print(isLatin1(s2), true);
    print(s2, "abcdefghijklmnopqrst");

    
    s2 = s1.substr(1, s1.length - 2);
    print(isLatin1(s2), true);
    print(s2.length, 39);
    print(s2, "bcdefghijklmnopqrstuvwxyz12345678900000");

    s2 = s2.substr(2).substr(1);
    print(isLatin1(s2), true);
    print(s2, "efghijklmnopqrstuvwxyz12345678900000");
}
testSubstrLatin1();

function testSubstrTwoByte() {
    
    var s1 = "abcdefghijklmnopqrstuvwxyz12345678900000a\u1480";
    print(isLatin1(s1), false);

    
    var s2 = s1.substr(28, 1);
    print(s2, "3");

    
    s2 = s1.substr(3, 5);
    print(s2, "defgh");

    
    s2 = s1.substr(2);
    print(isLatin1(s2), false);
    print(s2, "cdefghijklmnopqrstuvwxyz12345678900000a\u1480");

    s2 = s2.substr(2).substr(1);
    print(isLatin1(s2), false);
    print(s2, "fghijklmnopqrstuvwxyz12345678900000a\u1480");
}
testSubstrTwoByte();

function testSubstring() {
    var s1 = "abcdefghijklmnopqrstuvwxyz123456789000ab";
    var s2 = s1.substring(1, 8);
    print(isLatin1(s2), true);
    print(s2, "bcdefgh");
    s2 = s1.substring(0, s1.length - 1);
    print(isLatin1(s2), true);
    print(s2, "abcdefghijklmnopqrstuvwxyz123456789000a");
}
testSubstring();

function testSlice() {
    var s1 = "abcdefghijklmnopqrstuvwxyz123456789000ABC";
    var s2 = s1.slice(1, 8);
    print(isLatin1(s2), true);
    print(s2, "bcdefgh");
    s2 = s1.slice(0, -2);
    print(isLatin1(s2), true);
    print(s2, "abcdefghijklmnopqrstuvwxyz123456789000A");
}
testSlice();

function testUndepend() {
    
    var s = "abcdefg".repeat(7);
    s.indexOf("def"); 
    print(isLatin1(s), true);

    var dep = s.substr(7);
    var res = dep.replace(/abcdef/g, ""); 
    print(res, "gggggg");

    
    var s = "abcdefg\u1200".repeat(6);
    s.indexOf("def"); 
    var dep = s.substr(8);
    var res = dep.replace(/abcdefg/g, ""); 
    print(res, "\u1200\u1200\u1200\u1200\u1200");
}
testUndepend();
