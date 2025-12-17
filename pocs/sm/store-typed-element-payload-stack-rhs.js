var xs = [
  new Float32Array(10),
  new Float64Array(10),
];

function f(ta) {
  for (var k = 0;;) {
    
    ta[k] = k;
    break;
  }
}

for (var i = 0; i < 100; ++i) {
  f(xs[i & 1]);
}

print(xs[0][0], 0);
print(xs[1][0], 0);
