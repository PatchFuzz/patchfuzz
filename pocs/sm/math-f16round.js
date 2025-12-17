function fromConstant() {
  

  for (let i = 0; i < 100; ++i) {
    print(Math.f16round(0), 0);
    print(Math.f16round(0.1), 0.0999755859375);
    print(Math.f16round(0.5), 0.5);
    print(Math.f16round(1), 1);
    print(Math.f16round(2049), 2048);
    print(Math.f16round(65520), Infinity);

    print(Math.f16round(-0), -0);
    print(Math.f16round(-0.1), -0.0999755859375);
    print(Math.f16round(-0.5), -0.5);
    print(Math.f16round(-1), -1);
    print(Math.f16round(-2049), -2048);
    print(Math.f16round(-65520), -Infinity);

    print(Math.f16round(NaN), NaN);
    print(Math.f16round(Infinity), Infinity);
    print(Math.f16round(-Infinity), -Infinity);

    print(Math.f16round(0 / 0), NaN);
    print(Math.f16round(1 / 0), Infinity);
    print(Math.f16round(-1 / 0), -Infinity);
  }
}
for (let i = 0; i < 2; ++i) fromConstant();

function fromInt32() {
  

  
  for (let i = 0; i <= 2048; ++i) {
    let i32 = i | 0;
    print(Math.f16round(i32), i32);
  }

  
  print(Math.f16round(2049), 2048);

  
  print(Math.f16round(65519), 65504);

  
  for (let i = 0; i <= 100; ++i) {
    let i32 = (i + 65520) | 0;
    print(Math.f16round(i32), Infinity);
  }
}
for (let i = 0; i < 2; ++i) fromInt32();

function fromFloat32() {
  

  
  for (let i = 0; i < 1024; ++i) {
    let f32 = Math.fround(i + 0.5);
    print(Math.f16round(f32), f32);
  }

  
  print(Math.f16round(1024.5), 1024);

  
  print(Math.f16round(65519.5), 65504);

  
  for (let i = 0; i <= 100; ++i) {
    let f32 = Math.fround(i + 65520.5);
    print(Math.f16round(f32), Infinity);
  }
}
for (let i = 0; i < 2; ++i) fromFloat32();

function fromLoadFloat16() {
  

  let f16 = new Float16Array([
    -Math.PI,
    -65519,
    -65520,
    -2048,
    -2049,
    -0.5,
    -0.1,
    -0,
    0,
    0.1,
    0.5,
    Math.PI,
    2048,
    2049,
    65519,
    65520,
    Infinity,
    NaN,
  ]);

  let dv = new DataView(f16.buffer);

  const nativeIsLittleEndian = new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;

  for (let i = 0; i < 200; ++i) {
    let idx = i % f16.length;
    let x = f16[idx];
    let y = dv.getFloat16(idx * Float16Array.BYTES_PER_ELEMENT, nativeIsLittleEndian);

    print(x, y);
    print(Math.f16round(x), x);
    print(Math.f16round(y), y);
  }
}
for (let i = 0; i < 2; ++i) fromLoadFloat16();
