var xs = [
  
  -(2n ** 2000n),
  -(2n ** 1000n),

  
  -18446744073709551617n,
  -18446744073709551616n,
  -18446744073709551615n,

  
  -9223372036854775809n,
  -9223372036854775808n,
  -9223372036854775807n,

  
  -4294967297n,
  -4294967296n,
  -4294967295n,

  
  -2147483649n,
  -2147483648n,
  -2147483647n,

  -1n,
  0n,
  1n,

  
  2147483647n,
  2147483648n,
  2147483649n,

  
  4294967295n,
  4294967296n,
  4294967297n,

  
  9223372036854775807n,
  9223372036854775808n,
  9223372036854775809n,

  
  18446744073709551615n,
  18446744073709551616n,
  18446744073709551617n,

  
  2n ** 1000n,
  2n ** 2000n,
];

function Double(x) {
  
  return numberToDouble(x);
}


var ys = xs.map(x => Double(Number(x)));



var zs = xs.map(x => {
  var isNegative = x < 0n;
  if (isNegative) {
    x = -x;
  }
  var s = x.toString(2);
  if (s.length <= 53 || (s.length <= 1024 && /^1+0+$/.test(s))) {
    return 0;
  }
  if (s.length <= 1024 && /^1+$/.test(s)) {
    return isNegative ? -1 : 1;
  }
  if (s.length <= 1024 && /^1+0+1$/.test(s)) {
    return isNegative ? 1 : -1;
  }
  return NaN;
});

function testLooseEqual() {
  for (var i = 0; i < 100; ++i) {
    var j = i % xs.length;
    var x = xs[j];
    var y = ys[j];
    var z = zs[j];

    print(x == y, z === 0);
    print(y == x, z === 0);
  }
}
testLooseEqual();

function testLooseNotEqual() {
  for (var i = 0; i < 100; ++i) {
    var j = i % xs.length;
    var x = xs[j];
    var y = ys[j];
    var z = zs[j];

    print(x != y, z !== 0);
    print(y != x, z !== 0);
  }
}
testLooseNotEqual();

function testLessThan() {
  for (var i = 0; i < 100; ++i) {
    var j = i % xs.length;
    var x = xs[j];
    var y = ys[j];
    var z = zs[j];

    if (z === 0) {
      print(x < y, false);
      print(y < x, false);
    } else if (z > 0) {
      print(x < y, true);
      print(y < x, false);
    } else if (z < 0) {
      print(x < y, false);
      print(y < x, true);
    } else {
      print(x < y, y > 0);
      print(y < x, y < 0);
    }
  }
}
testLessThan();

function testLessThanEquals() {
  for (var i = 0; i < 100; ++i) {
    var j = i % xs.length;
    var x = xs[j];
    var y = ys[j];
    var z = zs[j];

    if (z === 0) {
      print(x <= y, true);
      print(y <= x, true);
    } else if (z > 0) {
      print(x <= y, true);
      print(y <= x, false);
    } else if (z < 0) {
      print(x <= y, false);
      print(y <= x, true);
    } else {
      print(x <= y, y > 0);
      print(y <= x, y < 0);
    }
  }
}
testLessThanEquals();

function testGreaterThan() {
  for (var i = 0; i < 100; ++i) {
    var j = i % xs.length;
    var x = xs[j];
    var y = ys[j];
    var z = zs[j];

    if (z === 0) {
      print(x > y, false);
      print(y > x, false);
    } else if (z > 0) {
      print(x > y, false);
      print(y > x, true);
    } else if (z < 0) {
      print(x > y, true);
      print(y > x, false);
    } else {
      print(x > y, y < 0);
      print(y > x, y > 0);
    }
  }
}
testGreaterThan();

function testGreaterThanEquals() {
  for (var i = 0; i < 100; ++i) {
    var j = i % xs.length;
    var x = xs[j];
    var y = ys[j];
    var z = zs[j];

    if (z === 0) {
      print(x >= y, true);
      print(y >= x, true);
    } else if (z > 0) {
      print(x >= y, false);
      print(y >= x, true);
    } else if (z < 0) {
      print(x >= y, true);
      print(y >= x, false);
    } else {
      print(x >= y, y < 0);
      print(y >= x, y > 0);
    }
  }
}
testGreaterThanEquals();
