function get(k) {
  
  var xs = [
    new Int32Array(10),
    new Int16Array(10),
  ];

  
  Object.prototype[k] = 1;

  for (var i = 0; i < 100; ++i) {
    var x = xs[i & 1];
    print(x[k], undefined);
  }
}


function test(fn) {
  return Function(`return ${fn};`)();
}


test(get)(-1);
test(get)(-2147483648);
test(get)(-2147483649);


test(get)(2147483648);


test(get)(1.5);
test(get)(-1.5);


test(get)(NaN);
test(get)(-Infinity);
test(get)(Infinity);
