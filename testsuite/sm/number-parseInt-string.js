

const stringInt32Values = [
  
  "-2147483648",
  "-2147483647",
  "-2147483646",

  
  "-65536", "-65535", "-256", "-255", "-100", "-50", "-10",

  
  "-2", "-1", "0", "1", "2",

  
  "10", "50", "100", "255", "256", "65535", "65536",

  
  "2147483645",
  "2147483646",
  "2147483647",
];

const stringInt32HexValues = [
  
  "-0x80000000",
  "-0x7fffffff",
  "-0x7ffffffe",

  
  "-0x10000", "-0xffff", "-0x100", "-0xff", "-0x64", "-0x32", "-0xa",

  
  "-0x2", "-0x1", "0x0", "0x1", "0x2",

  
  "0xa", "0x32", "0x64", "0xff", "0x100", "0xffff", "0x10000",

  
  "0x7ffffffd",
  "0x7ffffffe",
  "0x7fffffff",
];


function testRadixAbsent() {
  for (let i = 0; i < 200; ++i) {
    let x = stringInt32Values[i % stringInt32Values.length];
    assertEq(+x, x|0, "x is an int32 value");

    let r = Number.parseInt(x);
    assertEq(r, +x);
  }
}
for (let i = 0; i < 2; ++i) testRadixAbsent();


function testRadixAbsentHex() {
  for (let i = 0; i < 200; ++i) {
    let x = stringInt32HexValues[i % stringInt32HexValues.length];

    
    
    let y = x;
    let sign = 1;
    if (x.startsWith("-")) {
      y = x.slice(1);
      sign = -1;
    }

    assertEq((+y) * sign, ((+y) * sign)|0, "x is an int32 hex value");

    let r = Number.parseInt(x);
    assertEq(r, (+y) * sign);
  }
}
for (let i = 0; i < 2; ++i) testRadixAbsentHex();


function testRadixTen() {
  for (let i = 0; i < 200; ++i) {
    let x = stringInt32Values[i % stringInt32Values.length];
    assertEq(+x, x|0, "x is an int32 value");

    let r = Number.parseInt(x, 10);
    assertEq(r, +x);
  }
}
for (let i = 0; i < 2; ++i) testRadixTen();


function testRadixSixteen() {
  for (let i = 0; i < 200; ++i) {
    let x = stringInt32Values[i % stringInt32Values.length];
    assertEq(+x, x|0, "x is an int32 value");

    let expected = Math.sign(x) * Number("0x" + Math.abs(x).toString(10));

    let r = Number.parseInt(x, 16);
    assertEq(r, expected);
  }
}
for (let i = 0; i < 2; ++i) testRadixSixteen();


function testRadixSixteenHex() {
  for (let i = 0; i < 200; ++i) {
    let x = stringInt32HexValues[i % stringInt32HexValues.length];

    
    
    let y = x;
    let sign = 1;
    if (x.startsWith("-")) {
      y = x.slice(1);
      sign = -1;
    }

    assertEq((+y) * sign, ((+y) * sign)|0, "x is an int32 hex value");

    let r = Number.parseInt(x, 16);
    assertEq(r, (+y) * sign);
  }
}
for (let i = 0; i < 2; ++i) testRadixSixteenHex();


function testRadixVariable() {
  for (let i = 0; i < 200; ++i) {
    let x = stringInt32Values[i % stringInt32Values.length];
    assertEq(+x, x|0, "x is an int32 value");

    let radix = [10, 16][(i > 100)|0];

    let expected = +x;
    if (radix === 16) {
      expected = Math.sign(+x) * Number("0x" + Math.abs(+x).toString(10));
    }

    let r = Number.parseInt(x, radix);
    assertEq(r, expected);
  }
}
for (let i = 0; i < 2; ++i) testRadixVariable();
