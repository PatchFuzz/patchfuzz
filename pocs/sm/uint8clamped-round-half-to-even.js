function nextUp(num) {
  if (!Number.isFinite(num)) {
    return num;
  }
  if (num === 0) {
    return Number.MIN_VALUE;
  }

  let f64 = new Float64Array([num]);
  let u64 = new BigUint64Array(f64.buffer);
  u64[0] += (num < 0 ? -1n : 1n);
  return f64[0];
}


function nextDown(num) {
  if (!Number.isFinite(num)) {
    return num;
  }
  if (num === 0) {
    return -Number.MIN_VALUE;
  }

  let f64 = new Float64Array([num]);
  let u64 = new BigUint64Array(f64.buffer);
  u64[0] += (num < 0 ? 1n : -1n);
  return f64[0];
}

function Clamped(num) {
  let uint8Clamped = new Uint8ClampedArray(1);

  
  uint8Clamped[0] = num;

  return uint8Clamped[0];
}

Math.clamp = (v, min, max) => Math.min(Math.max(v, min), max);


for (let i = -1; i <= 255 + 1; ++i) {
  let num = i;

  print(Clamped(num), Math.clamp(i, 0, 255));

  let down = num;
  for (let j = 0; j < 10; ++j) {
    down = nextDown(down);
    print(Clamped(down), Math.clamp(i, 0, 255));
  }

  let up = num;
  for (let j = 0; j < 10; ++j) {
    up = nextUp(up);
    print(Clamped(up), Math.clamp(i, 0, 255));
  }
}


for (let i = -1; i <= 255 + 1; ++i) {
  let num = i + 0.5;

  print(Clamped(num), Math.clamp(i + (i & 1), 0, 255));

  let down = num;
  for (let j = 0; j < 10; ++j) {
    down = nextDown(down);
    print(Clamped(down), Math.clamp(i, 0, 255));
  }

  let up = num;
  for (let j = 0; j < 10; ++j) {
    up = nextUp(up);
    print(Clamped(up), Math.clamp(i + 1, 0, 255));
  }
}
