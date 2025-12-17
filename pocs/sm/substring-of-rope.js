gczeal(0);

const hasStringRepresentation = typeof stringRepresentation !== "undefined";

function print(s1, s2) {
  if (hasStringRepresentation) {
    var s1Repr = stringRepresentation(s1);
    var s2Repr = stringRepresentation(s2);
    var s1Addr = JSON.parse(s1Repr).address;
    var s2Addr = JSON.parse(s2Repr).address;
    print(typeof s1Addr, "string");
    print(s1Addr, s2Addr);
  }
}


function testSameSubstring() {
  var rope = newRope("abcdefghijklmnop", "0123456789");
  for (var i = 0; i < 5; i++) {
    var sub = rope.substring(0);
    print(isRope(sub), true);
    print(rope, sub);
  }
}
testSameSubstring();



function testLeftRightSubstring() {
  var left = "abcdefghijklmnopqrstuvwxyz";
  var right = "012345678901234567890123456789";
  var rope = newRope(left, right);
  for (var i = 0; i < 10; i++) {
    print(rope.substring(0, left.length), left);
    print(rope.substring(left.length), right);
    print(isRope(rope), true); 
  }
}
testLeftRightSubstring();

function testSubstringSpansBoth() {
  var left = "abcdefghijklmnopqrstuvwxyz";
  var right = "012345678901234567890123456789";
  var rope = newRope(left, right);

  
  
  for (var i = 0; i < 10; i++) {
    var substrInline = rope.substring(left.length - 5, left.length + 5);
    if (hasStringRepresentation) {
      print(stringRepresentation(substrInline).includes("InlineString"), true);
    }
    print(substrInline, "vwxyz01234");
    print(isRope(rope), true); 
  }

  
  
  var substrLong = rope.substring(0, rope.length - 1);
  print(isRope(rope), false);
  print(isRope(substrLong), false);
}
testSubstringSpansBoth();
