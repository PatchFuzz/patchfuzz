function test() {
  var s = "aaaaaaaaaaaaaaaaaa111aaaa";
  var latin1Rope1 = "foo" + s;
  var latin1Rope2 = "bar" + latin1Rope1;
  var twoByteRope = "\u1200--" + latin1Rope1;

  
  print(twoByteRope.lastIndexOf("11"), 25);

  
  print(isLatin1(latin1Rope1), false);
  print(latin1Rope1, "fooaaaaaaaaaaaaaaaaaa111aaaa");

  
  
  if (isLatin1(s))
    print(isLatin1(latin1Rope2), true);

  
  print(latin1Rope2.lastIndexOf("11"), 25);
  print(latin1Rope2, "barfooaaaaaaaaaaaaaaaaaa111aaaa");
}
test();
