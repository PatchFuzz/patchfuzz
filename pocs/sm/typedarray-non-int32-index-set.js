function set(k) {
  
  var xs = [
    new Int32Array(10),
    new Int16Array(10),
  ];

  for (var i = 0; i < 100; ++i) {
    var x = xs[i & 1];
    x[k] = 0;
  }

  print(xs[0][k], undefined);
  print(xs[1][k], undefined);
}


function test(fn) {
  return Function(`return ${fn};`)();
}


test(set)(-1);
test(set)(-2147483648);
test(set)(-2147483649);


test(set)(2147483648);


test(set)(1.5);
test(set)(-1.5);


test(set)(NaN);
test(set)(-Infinity);
test(set)(Infinity);
