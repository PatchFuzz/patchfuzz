assertEq(isLatin1("Foo123\u1200"), false);

s = "Foo123";
assertEq(isLatin1(s), true);

function testEq(s) {
    assertEq(isLatin1(s), true);
    assertEq(s === "foo02", false);
    assertEq(s == "foo02", false);

    
    var nonAtomized = "\u1234foo01\u00c7".substr(1);
    assertEq(isLatin1(nonAtomized), false);
    assertEq(s === nonAtomized, true);
    assertEq(nonAtomized !== s, false);
    assertEq(nonAtomized == s, true);
    assertEq(s, nonAtomized);

    nonAtomized = "\u1234foo02".substr(1);
    assertEq(isLatin1(nonAtomized), false);
    assertEq(s === nonAtomized, false);
    assertEq(nonAtomized == s, false);
}

s = "foo01\u00c7";
testEq(s);
testEq(s);

function testConcat() {
    function concat(s1, s2) {
	return s1 + s2;
    }

    
    assertEq(concat("abc", "def"), "abcdef");
    var s1 = "ABC";
    var s2 = "DEF";
    assertEq(concat(s1, s2), "ABCDEF");
    assertEq(concat(s1, "GHI\u0580"), "ABCGHI\u0580");
    assertEq(concat("GHI\u0580", s2), "GHI\u0580DEF");
    assertEq(concat(concat("GHI\u0580", s2), s1), "GHI\u0580DEFABC");
    assertEq(isLatin1(s1), true);
    assertEq(isLatin1(s2), true);

    
    var s3 = "0123456789012345678901234567890123456789";
    var rope = concat(s1, s3);
    assertEq(isLatin1(rope), true);
    assertEq(rope, "ABC0123456789012345678901234567890123456789");
    assertEq(isLatin1(rope), true); 

    
    assertEq(isLatin1(s3), true);
    rope = concat(s3, "someTwoByteString\u0580");
    assertEq(isLatin1(rope), false);
    assertEq(rope, "0123456789012345678901234567890123456789someTwoByteString\u0580");
    assertEq(isLatin1(rope), false);

    assertEq(isLatin1(s3), true);
    rope = concat("twoByteString\u0580", concat(s3, "otherTwoByte\u0580"));
    assertEq(isLatin1(rope), false);
    assertEq(rope, "twoByteString\u05800123456789012345678901234567890123456789otherTwoByte\u0580");
    assertEq(isLatin1(rope), false);

    
    var s4 = "adsfasdfjkasdfkjasdfasasdfasdf";
    for (var i=0; i<5; i++) {
	s4 = concat(s4, s1);
	assertEq(s4 === ".".repeat(s4.length), false); 
    }

    assertEq(isLatin1(s4), true);

    
    s4 = concat(s4, "--\u0580");
    assertEq(s4, "adsfasdfjkasdfkjasdfasasdfasdfABCABCABCABCABC--\u0580");
}
testConcat();

function testFlattenDependent() {
    function concat(s1, s2) {
	return s1 + s2;
    }

    
    var s1 = "Foo0123456789bar012345---";
    var s2 = "Foo0123456789bar012345+++";
    assertEq(isLatin1(s1), true);
    assertEq(isLatin1(s2), true);

    
    var rope1 = concat(s1, s1);
    assertEq(isLatin1(rope1), true);

    var rope2 = concat(rope1, s2);
    assertEq(isLatin1(rope2), true);

    var rope3 = concat("twoByte\u0581", rope2);
    assertEq(isLatin1(rope3), false);

    
    assertEq(rope3, "twoByte\u0581Foo0123456789bar012345---Foo0123456789bar012345---Foo0123456789bar012345+++");
    assertEq(isLatin1(rope3), false);

    
    
    assertEq(isLatin1(rope1), false);
    assertEq(isLatin1(rope2), false);

    assertEq(rope1, "Foo0123456789bar012345---Foo0123456789bar012345---");
    assertEq(rope2, "Foo0123456789bar012345---Foo0123456789bar012345---Foo0123456789bar012345+++");
}
testFlattenDependent();
