const nativeIsLittleEndian = new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;

function float32(dv, i) {
  
  i = i|0;

  
  let x = Math.fround(i + 0.1);

  
  let y = Math.fround(Math.sqrt(x));

  
  dv.setFloat16(0, y, nativeIsLittleEndian);
}

function float64(dv, i) {
  
  i = i|0;

  
  let x = Math.fround(i + 0.1);

  
  let y = Math.sqrt(x);

  
  dv.setFloat16(0, y, nativeIsLittleEndian);
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

let dv = new DataView(new ArrayBuffer(Float16Array.BYTES_PER_ELEMENT));

let n = 0;
for (let i = 0; i < LIMIT; ++i) {
  float32(dv, i);
  let x = dv.getUint16(0, nativeIsLittleEndian);

  float32_baseline(dv, i);
  print(x, dv.getUint16(0, nativeIsLittleEndian));

  float64(dv, i);
  let y = dv.getUint16(0, nativeIsLittleEndian);

  float64_baseline(dv, i);
  print(y, dv.getUint16(0, nativeIsLittleEndian));

  if (x !== y) {
    n++;
  }
}
print(n, 1);
