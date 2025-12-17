function test() {
  for (var i = 0; i < 100; i++) {
    var s = "abcdefabcdefabcdefabcdefabcdefabcdef";
    for (var j = 0; j < 4; j++) {
      s = s.substring(1);
    }
    var rep = JSON.parse(stringRepresentation(s));
    print(rep.flags.includes("DEPENDENT_BIT"), true);
    print(rep.base.flags.includes("DEPENDENT_BIT"), false);
    print(s, "efabcdefabcdefabcdefabcdefabcdef");
  }
}
test();
