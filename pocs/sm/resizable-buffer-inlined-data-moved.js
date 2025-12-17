function fillArrayBuffer(rab) {
  let fill = new Int8Array(rab);
  for (let i = 0; i < fill.length; ++i) fill[i] = i + 1;
}

function test() {
  let rab = new ArrayBuffer(4, {maxByteLength: 4});
  let ta = new Int8Array(rab, 2, 2);

  fillArrayBuffer(rab);

  print(ta[0], 3);
  print(ta[1], 4);

  
  rab.resize(3);

  
  gc();

  
  rab.resize(4);

  print(ta[0], 3);
  print(ta[1], 0);
}
test();


function testAutoLength() {
  let rab = new ArrayBuffer(4, {maxByteLength: 4});
  let ta = new Int8Array(rab, 2);

  fillArrayBuffer(rab);

  print(ta[0], 3);
  print(ta[1], 4);

  
  rab.resize(1);

  
  gc();

  
  rab.resize(4);

  print(ta[0], 0);
  print(ta[1], 0);
}
testAutoLength();
