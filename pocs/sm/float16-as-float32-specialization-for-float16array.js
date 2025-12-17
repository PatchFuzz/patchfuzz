function float32(f16, i) {
  
  i = i|0;

  
  let x = Math.fround(i + 0.1);

  
  let y = Math.fround(Math.sqrt(x));

  
  f16[0] = y;
}

function float64(f16, i) {
  
  i = i|0;

  
  let x = Math.fround(i + 0.1);

  
  let y = Math.sqrt(x);

  
  f16[0] = y;
}

function toBaseline(f) {
  let source = f.toString();
  print(source.at(-1), "}");

  
  source = source.slice(0, -1) + "; with ({}); }";

  return Function(`return ${source};`)();
}


















const LIMIT = 1550;

let float32_baseline = toBaseline(float32);
let float64_baseline = toBaseline(float64);

let f16 = new Float16Array(1);
let u16 = new Uint16Array(f16.buffer);

let n = 0;
for (let i = 0; i < LIMIT; ++i) {
  float32(f16, i);
  let x = u16[0];

  float32_baseline(f16, i);
  print(x, u16[0]);

  float64(f16, i);
  let y = u16[0];

  float64_baseline(f16, i);
  print(y, u16[0]);

  if (x !== y) {
    n++;
  }
}
print(n, 1);
