function testToLowerCase() {
    var s1 = "abcdefgABCDEFGH 123456";
    print(isLatin1(s1), true);

    
    var s2 = s1.toLowerCase();
    print(isLatin1(s2), true);
    print(s2, "abcdefgabcdefgh 123456");

    s2 = s1.toLocaleLowerCase();
    print(isLatin1(s2), true);
    print(s2, "abcdefgabcdefgh 123456");

    
    s2 = "abcdefg\u1200ABCDEFGH 123456\u04AC".toLowerCase();
    print(s2, "abcdefg\u1200abcdefgh 123456\u04AD");

    s2 = "abcdefg\u1200ABCDEFGH 123456\u04AC".toLocaleLowerCase();
    print(s2, "abcdefg\u1200abcdefgh 123456\u04AD");

    
    for (var i=0; i <= 0xff; i++) {
	var s = "\u1200\u11AA" + String.fromCharCode(i);
	print(s.toLowerCase().charCodeAt(2) <= 0xff, true);
    }
}
testToLowerCase();

function testToUpperCase() {
    var s1 = "abcdefgABCDEFGH 12345";
    print(isLatin1(s1), true);

    
    var s2 = s1.toUpperCase();
    print(isLatin1(s2), true);
    print(s2, "ABCDEFGABCDEFGH 12345");

    s2 = s1.toLocaleUpperCase();
    print(isLatin1(s2), true);
    print(s2, "ABCDEFGABCDEFGH 12345");

    
    s2 = "abcdefg\u1200ABCDEFGH 12345\u1E0F".toUpperCase();
    print(s2, "ABCDEFG\u1200ABCDEFGH 12345\u1E0E");

    s2 = "abcdefg\u1200ABCDEFGH 12345\u1E0F".toLocaleUpperCase();
    print(s2, "ABCDEFG\u1200ABCDEFGH 12345\u1E0E");

    
    
    s1 = "ABC\u00FF";
    print(isLatin1(s1), true);
    s2 = s1.toUpperCase();
    print(isLatin1(s2), false);
    print(s2, "ABC\u0178");
}
testToUpperCase();
