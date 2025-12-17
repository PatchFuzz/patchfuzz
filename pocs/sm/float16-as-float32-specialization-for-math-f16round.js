function float32(i) {
  
  i = i|0;

  
  let x = Math.fround(i + 0.1);

  
  let y = Math.fround(Math.sqrt(x));

  
  return Math.f16round(y);
}

function float64(i) {
  
  i = i|0;

  
  let x = Math.fround(i + 0.1);

  
  let y = Math.sqrt(x);

  
  return Math.f16round(y);
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

let n = 0;
for (let i = 0; i < LIMIT; ++i) {
  let x = float32(i);
  print(x, float32_baseline(i));

  let y = float64(i);
  print(y, float64_baseline(i));

  if (x !== y) {
    n++;
  }
}
print(n, 1);
