var xs = [
  new Float32Array(10),
  new Float64Array(10),
];

for (var i = 0; i < 100; ++i) {
  var ta = xs[i & 1];

  var v = +ta[0];

  
  ta[0] = ~v;
}

print(xs[0][0], 0);
print(xs[1][0], 0);
