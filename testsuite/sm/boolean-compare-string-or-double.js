






var xs = [
  
  false, false, false, false,

  
  true, true, true, true,

  
  false, false, false, false,
  true, true, true, true,
];

var ys = [
  
  "", "0", "0.0", ".0",

  
  "1", "1.0", "0x1", "  1\t\r\n",

  
  
  "not-a-number", "NaN", "Infinity", "2",
  "not-a-number", "NaN", "Infinity", "2",
];

function Double(x) {
  
  return numberToDouble(x);
}

var zs = [
  
  Double(0), Double(0), -0, -0,

  
  Double(1), Double(1), Double(1), Double(1),

  
  
  NaN, Infinity, Double(2), Double(-1.5),
  NaN, Infinity, Double(2), Double(-1.5),
];

function testLooseEqual() {
  for (var i = 0; i < 100; ++i) {
    var j = i % xs.length;
    var x = xs[j];
    var y = ys[j];
    var z = zs[j];

    var r = j < (xs.length >> 1);

    assertEq(x == y, r);
    assertEq(y == x, r);

    assertEq(x == z, r);
    assertEq(z == x, r);
  }
}
testLooseEqual();

function testLooseNotEqual() {
  for (var i = 0; i < 100; ++i) {
    var j = i % xs.length;
    var x = xs[j];
    var y = ys[j];
    var z = zs[j];

    var r = j < (xs.length >> 1);

    assertEq(x != y, !r);
    assertEq(y != x, !r);

    assertEq(x != z, !r);
    assertEq(z != x, !r);
  }
}
testLooseNotEqual();

function testLessThan() {
  for (var i = 0; i < 100; ++i) {
    var j = i % xs.length;
    var x = xs[j];
    var y = ys[j];
    var z = zs[j];

    assertEq(x < y, +x < +y);
    assertEq(y < x, +y < +x);

    assertEq(x < z, +x < +z);
    assertEq(z < x, +z < +x);
  }
}
testLessThan();

function testLessThanEqual() {
  for (var i = 0; i < 100; ++i) {
    var j = i % xs.length;
    var x = xs[j];
    var y = ys[j];
    var z = zs[j];

    assertEq(x <= y, +x <= +y);
    assertEq(y <= x, +y <= +x);

    assertEq(x <= z, +x <= +z);
    assertEq(z <= x, +z <= +x);
  }
}
testLessThanEqual();

function testGreaterThan() {
  for (var i = 0; i < 100; ++i) {
    var j = i % xs.length;
    var x = xs[j];
    var y = ys[j];
    var z = zs[j];

    assertEq(x > y, +x > +y);
    assertEq(y > x, +y > +x);

    assertEq(x > z, +x > +z);
    assertEq(z > x, +z > +x);
  }
}
testGreaterThan();

function testGreaterThanEqual() {
  for (var i = 0; i < 100; ++i) {
    var j = i % xs.length;
    var x = xs[j];
    var y = ys[j];
    var z = zs[j];

    assertEq(x >= y, +x >= +y);
    assertEq(y >= x, +y >= +x);

    assertEq(x >= z, +x >= +z);
    assertEq(z >= x, +z >= +x);
  }
}
testGreaterThanEqual();
