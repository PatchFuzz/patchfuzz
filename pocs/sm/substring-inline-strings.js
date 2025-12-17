let hasStringRepresentation = typeof stringRepresentation === "function";

function testLatin1() {
  var s = "abcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 100; i++) {
    var sub8 = s.substring(0, 8);
    print(sub8, "abcdefgh");
    if (hasStringRepresentation) {
      print(stringRepresentation(sub8).includes("(JSThinInlineString*)"), true);
    }

    var sub24 = s.substring(0, 24);
    print(sub24, "abcdefghijklmnopqrstuvwx");
    if (hasStringRepresentation) {
      print(stringRepresentation(sub24).includes("(JSFatInlineString*)"), true);
    }

    var sub25 = s.substring(0, 25);
    print(sub25, "abcdefghijklmnopqrstuvwxy");
    if (hasStringRepresentation) {
      print(stringRepresentation(sub25).includes("(JSDependentString*)"), true);
    }
  }
}
testLatin1();

function testTwoByte() {
  var s = "\u1000bcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 100; i++) {
    var sub4 = s.substring(0, 4);
    print(sub4, "\u1000bcd");
    if (hasStringRepresentation) {
      print(stringRepresentation(sub4).includes("(JSThinInlineString*)"), true);
    }

    var sub12 = s.substring(0, 12);
    print(sub12, "\u1000bcdefghijkl");
    if (hasStringRepresentation) {
      print(stringRepresentation(sub12).includes("(JSFatInlineString*)"), true);
    }

    var sub13 = s.substring(0, 13);
    print(sub13, "\u1000bcdefghijklm");
    if (hasStringRepresentation) {
      print(stringRepresentation(sub13).includes("(JSDependentString*)"), true);
    }
  }
}
testTwoByte();
