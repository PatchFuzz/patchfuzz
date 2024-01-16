

const int32Values = [
  
  -2147483648,
  -2147483647,
  -2147483646,

  
  -65536, -65535, -256, -255, -100, -50, -10,

  
  -2, -1, 0, 1, 2,

  
  10, 50, 100, 255, 256, 65535, 65536,

  
  2147483645,
  2147483646,
  2147483647,
];


function testRadixAbsent() {
  for (let i = 0; i < 200; ++i) {
    let x = int32Values[i % int32Values.length];
    assertEq(x, x|0, "x is an int32 value");

    let r = Number.parseInt(x);
    assertEq(r, x);
  }
}
for (let i = 0; i < 2; ++i) testRadixAbsent();


function testRadixTen() {
  for (let i = 0; i < 200; ++i) {
    let x = int32Values[i % int32Values.length];
    assertEq(x, x|0, "x is an int32 value");

    let r = Number.parseInt(x, 10);
    assertEq(r, x);
  }
}
for (let i = 0; i < 2; ++i) testRadixTen();


function testRadixSixteen() {
  for (let i = 0; i < 200; ++i) {
    let x = int32Values[i % int32Values.length];
    assertEq(x, x|0, "x is an int32 value");

    let expected = Math.sign(x) * Number("0x" + Math.abs(x).toString(10));

    let r = Number.parseInt(x, 16);
    assertEq(r, expected);
  }
}
for (let i = 0; i < 2; ++i) testRadixSixteen();


function testRadixVariable() {
  for (let i = 0; i < 200; ++i) {
    let x = int32Values[i % int32Values.length];
    assertEq(x, x|0, "x is an int32 value");

    let radix = [10, 16][(i > 100)|0];

    let expected = x;
    if (radix === 16) {
      expected = Math.sign(x) * Number("0x" + Math.abs(x).toString(10));
    }

    let r = Number.parseInt(x, radix);
    assertEq(r, expected);
  }
}
for (let i = 0; i < 2; ++i) testRadixVariable();


function testBadInput() {
  for (let i = 0; i < 200; ++i) {
    let x = int32Values[i % int32Values.length];
    assertEq(x, x|0, "x is an int32 value");

    let y = [x, NaN][(i > 150)|0];

    let r = Number.parseInt(y, 10);
    assertEq(r, y);
  }
}
for (let i = 0; i < 2; ++i) testBadInput();
