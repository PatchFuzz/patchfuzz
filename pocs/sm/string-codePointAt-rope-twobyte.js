function makeString(from) {
  var codePoints = [];
  for (var i = 0; i < 16; ++i) {
    codePoints.push(from + i);
  }
  return String.fromCodePoint(...codePoints);
}

function makeRope() {
  var left = newRope(makeString(0x140), makeString(0x140 + 16));
  var right = newRope(makeString(0x160), makeString(0x160 + 16));
  var rope = newRope(left, right);
  return {left, right, rope};
}



function testLeftChildConstant() {
  for (var i = 0; i < 200; ++i) {
    var {rope} = makeRope();

    var ch = rope.codePointAt(0);
    print(ch, 0x140);
  }
}
for (var i = 0; i < 2; ++i) {
  testLeftChildConstant();
}



function testRightChildConstant() {
  for (var i = 0; i < 200; ++i) {
    var {rope} = makeRope();

    var ch = rope.codePointAt(32);
    print(ch, 0x160);
  }
}
for (var i = 0; i < 2; ++i) {
  testRightChildConstant();
}



function testLeftChildVariable() {
  for (var i = 0; i < 200; ++i) {
    var {left, rope} = makeRope();

    var idx = i % left.length;
    var ch = rope.codePointAt(idx);
    print(ch, 0x140 + idx);
  }
}
for (var i = 0; i < 2; ++i) {
  testLeftChildVariable();
}



function testRightChildVariable() {
  for (var i = 0; i < 200; ++i) {
    var {left, right, rope} = makeRope();

    var idx = i % right.length;
    var ch = rope.codePointAt(left.length + idx);
    print(ch, 0x160 + idx);
  }
}
for (var i = 0; i < 2; ++i) {
  testRightChildVariable();
}



function testBothChildren() {
  for (var i = 0; i < 200; ++i) {
    var {rope} = makeRope();

    for (var j = 0; j < rope.length; ++j) {
      var ch = rope.codePointAt(j);
      print(ch, 0x140 + j);
    }
  }
}
for (var i = 0; i < 2; ++i) {
  testBothChildren();
}



function testLeftChildAbsentIndex() {
  for (var i = 0; i < 200; ++i) {
    var {rope} = makeRope();

    var ch = rope.codePointAt();
    print(ch, 0x140);
  }
}
for (var i = 0; i < 2; ++i) {
  testLeftChildAbsentIndex();
}
