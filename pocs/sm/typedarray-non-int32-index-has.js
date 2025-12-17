function has(k) {
  
  var xs = [
    new Int32Array(10),
    new Int16Array(10),
  ];

  
  Object.prototype[k] = 1;

  for (var i = 0; i < 100; ++i) {
    var x = xs[i & 1];
    print(k in x, false);
  }
}


function test(fn) {
  return Function(`return ${fn};`)();
}


test(has)(-1);
test(has)(-2147483648);
test(has)(-2147483649);


test(has)(2147483648);


test(has)(1.5);
test(has)(-1.5);


test(has)(NaN);
test(has)(-Infinity);
test(has)(Infinity);
