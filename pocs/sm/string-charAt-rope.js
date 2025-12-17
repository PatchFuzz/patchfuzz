function makeRope() {
  var left = newRope("@ABCDEFGHIJKLMNO", "PQRSTUVWXYZ[\\]^_");
  var right = newRope("`abcdefghijklmno", "pqrstuvwxyz{|}~");
  var rope = newRope(left, right);
  return {left, right, rope};
}



function testLeftChildConstant() {
  for (var i = 0; i < 200; ++i) {
    var {rope} = makeRope();

    var ch = rope.charAt(0);
    print(ch, "@");
  }
}
for (var i = 0; i < 2; ++i) {
  testLeftChildConstant();
}



function testRightChildConstant() {
  for (var i = 0; i < 200; ++i) {
    var {rope} = makeRope();

    var ch = rope.charAt(32);
    print(ch, "`");
  }
}
for (var i = 0; i < 2; ++i) {
  testRightChildConstant();
}



function testLeftChildVariable() {
  for (var i = 0; i < 200; ++i) {
    var {left, rope} = makeRope();

    var idx = i % left.length;
    var ch = rope.charAt(idx);
    print(ch, String.fromCharCode(0x40 + idx));
  }
}
for (var i = 0; i < 2; ++i) {
  testLeftChildVariable();
}



function testRightChildVariable() {
  for (var i = 0; i < 200; ++i) {
    var {left, right, rope} = makeRope();

    var idx = i % right.length;
    var ch = rope.charAt(left.length + idx);
    print(ch, String.fromCharCode(0x60 + idx));
  }
}
for (var i = 0; i < 2; ++i) {
  testRightChildVariable();
}



function testBothChildren() {
  for (var i = 0; i < 200; ++i) {
    var {rope} = makeRope();

    for (var j = 0; j < rope.length; ++j) {
      var ch = rope.charAt(j);
      print(ch, String.fromCharCode(0x40 + j));
    }
  }
}
for (var i = 0; i < 2; ++i) {
  testBothChildren();
}



function testLeftChildAbsentIndex() {
  for (var i = 0; i < 200; ++i) {
    var {rope} = makeRope();

    var ch = rope.charAt();
    print(ch, "@");
  }
}
for (var i = 0; i < 2; ++i) {
  testLeftChildAbsentIndex();
}
