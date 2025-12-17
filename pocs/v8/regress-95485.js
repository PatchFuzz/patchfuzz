function Test() {
  var left  = 'XXX';
  var right = 'YYY';
  for (var i = 0; i < 3; i++) {
    var cons = left + right;
    var substring = cons.substring(2, 4);
    try {
      with ({Test: i})
          continue;
    } finally { }
  }
  return substring;
}

print('XY', Test());
