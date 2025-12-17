function test() {
  const char = "\u1FA2";
  const upperChars = char.toUpperCase();
  print(upperChars.length, 2);
  for (var i = 0; i < 20; i++) {
    var prefix1 = "a".repeat(i);
    var prefix2 = ".".repeat(i);
    print((prefix1 + char).toUpperCase(), prefix1.toUpperCase() + upperChars);
    print((prefix2 + char).toUpperCase(), prefix2 + upperChars);
  }
}
test();
