var s = "aaaaaaaaaaaaaaaaaa111aaaa";
var latin1Rope1 = "foo" + s;
var latin1Rope2 = "bar" + latin1Rope1;
var twoByteRope = "\u1200--" + latin1Rope1;


assertEq(twoByteRope.lastIndexOf("11"), 25);


assertEq(isLatin1(latin1Rope1), false);
assertEq(latin1Rope1, "fooaaaaaaaaaaaaaaaaaa111aaaa");



if (isLatin1(s))
    assertEq(isLatin1(latin1Rope2), true);


assertEq(latin1Rope2.lastIndexOf("11"), 25);
assertEq(latin1Rope2, "barfooaaaaaaaaaaaaaaaaaa111aaaa");
