function has(k) {
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
    print(k in x, false);
  }
}


function test(fn) {
  return Function(`return ${fn};`)();
}


test(has)(100);
test(has)("100");


test(has)(4294967296);
test(has)("4294967296");


test(has)(Infinity);
test(has)("Infinity");

test(has)(-Infinity);
test(has)("-Infinity");

test(has)(NaN);
test(has)("NaN");


test(has)(1.1);
test(has)("1.1");


test(has)(1e+25);
test(has)("1e+25");
