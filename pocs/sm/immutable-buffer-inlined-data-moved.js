function fillArrayBuffer(ab) {
  let fill = new Int8Array(ab);
  for (let i = 0; i < fill.length; ++i) fill[i] = i + 1;
}

function test() {
  let ab = new ArrayBuffer(4);

  fillArrayBuffer(ab);

  let ta = new Int8Array(ab.transferToImmutable(), 2, 2);

  print(ta[0], 3);
  print(ta[1], 4);

  
  gc();

  print(ta[0], 3);
  print(ta[1], 4);
}
test();
