function get(k) {
  var p = {};
  p[k] = 1;

  
  
  var ta = new Int32Array(10);
  Object.setPrototypeOf(ta, p);

  
  var xs = [
    ta,

    {a:0}, {b:0}, {c:0}, {d:0}, {e:0}, {f:0}, {g:0}, {h:0},
    {j:0}, {k:0}, {l:0}, {m:0}, {n:0}, {o:0}, {p:0},
  ];

  for (var i = 0; i < 100; ++i) {
    var x = xs[i & 15];
    print(x[k], undefined);
  }
}


function test(fn) {
  return Function(`return ${fn};`)();
}


test(get)(100);
test(get)("100");


test(get)(4294967296);
test(get)("4294967296");


test(get)(Infinity);
test(get)("Infinity");

test(get)(-Infinity);
test(get)("-Infinity");

test(get)(NaN);
test(get)("NaN");


test(get)(1.1);
test(get)("1.1");


test(get)(1e+25);
test(get)("1e+25");
