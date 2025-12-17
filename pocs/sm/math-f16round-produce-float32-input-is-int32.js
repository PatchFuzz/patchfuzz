function sqrt_float32(v) {
  return Math.fround(Math.sqrt(Math.fround(v|0)));
}

function sqrt_float16(v) {
  return Math.fround(Math.sqrt(Math.f16round(v|0)));
}

function abs_float32(v) {
  return Math.fround(Math.abs(Math.fround(v|0)));
}

function abs_float16(v) {
  return Math.fround(Math.abs(Math.f16round(v|0)));
}

function ceil_float32(v) {
  return Math.fround(Math.abs(Math.fround(v|0)));
}

function ceil_float16(v) {
  return Math.fround(Math.abs(Math.f16round(v|0)));
}

function mul_float32(v) {
  return Math.fround(Math.fround(v|0) * 2);
}

function mul_float16(v) {
  return Math.fround(Math.f16round(v|0) * 2);
}

function cmp_float32(v) {
  return Math.fround(v|0) < 1000;
}

function cmp_float16(v) {
  return Math.f16round(v|0) < 1000;
}


with ({}) ;

for (let i = 0; i <= 2048; ++i) {
  print(sqrt_float16(i), sqrt_float32(i));
  print(abs_float16(i), abs_float32(i));
  print(ceil_float16(i), ceil_float32(i));
  print(mul_float16(i), mul_float32(i));
  print(cmp_float16(i), cmp_float32(i));
}
