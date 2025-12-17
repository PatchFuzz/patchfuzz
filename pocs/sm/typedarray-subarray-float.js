with ({});

function float32(i) {
  var ta = new Float32Array(10).subarray(1);

  
  ta[0] = Math.fround(i);

  print(ta[0], i);
}

function float32_constant() {
  var ta = new Float32Array(10).subarray(1);

  
  ta[0] = Math.fround(1);

  print(ta[0], 1);
}

function float16(i) {
  var ta = new Float16Array(10).subarray(1);

  
  ta[0] = Math.f16round(i);

  print(ta[0], i);
}

function float16_constant() {
  var ta = new Float16Array(10).subarray(1);

  
  ta[0] = Math.f16round(1);

  print(ta[0], 1);
}

for (var i = 0; i < 100; ++i) {
  float32(i);
  float32_constant(i);

  float16(i);
  float16_constant(i);
}
