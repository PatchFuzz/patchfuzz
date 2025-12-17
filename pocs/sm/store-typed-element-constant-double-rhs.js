var xs = [
  new Float32Array(10),
  new Float64Array(10),
];

for (var i = 0; i < 100; ++i) {
  var ta = xs[i & 1];

  
  ta[0] = 0.1;
}

print(xs[0][0], Math.fround(0.1));
print(xs[1][0], 0.1);
