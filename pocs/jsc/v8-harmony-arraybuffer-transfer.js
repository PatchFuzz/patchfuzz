print("./resources/v8-mjsunit.js", "caller relative");

print(0, ArrayBuffer.prototype.transfer.length);
print("transfer", ArrayBuffer.prototype.transfer.name);

function AssertDetached(ab) {
  print(0, ab.byteLength);
  print(() => (new Uint8Array(ab)).sort(), TypeError);
}

const IndicesAndValuesForTesting = [
  [1, 4],
  [4, 18],
  [17, 255],
  [518, 48]
];
function WriteTestData(ab) {
  let u8 = new Uint8Array(ab);
  for (let [idx, val] of IndicesAndValuesForTesting) {
    u8[idx] = val;
  }
}
function AssertBufferContainsTestData(ab) {
  let u8 = new Uint8Array(ab);
  for (let [idx, val] of IndicesAndValuesForTesting) {
    if (idx < u8.length) {
      print(val, u8[idx]);
    }
  }
}

function TestSameLength(len, opts) {
  let ab = new ArrayBuffer(len, opts);
  let resizable = ab.resizable;
  WriteTestData(ab);
  const xfer = ab.transfer();
  print(len, xfer.byteLength);
  print(resizable, xfer.resizable);
  AssertBufferContainsTestData(xfer);
  AssertDetached(ab);
}
TestSameLength(1024);
TestSameLength(1024, { maxByteLength: 2048 });

function TestGrow(len, opts) {
  let ab = new ArrayBuffer(len);
  WriteTestData(ab);
  const newLen = len * 2 + 128; 
  const xfer = ab.transfer(newLen);
  print(newLen, xfer.byteLength);
  print(xfer.resizable);
  if (len > 0) AssertBufferContainsTestData(xfer);
  AssertDetached(ab);

  
  let u8 = new Uint8Array(xfer);
  for (let i = len; i < newLen; i++) {
    print(0, u8[i]);
  }
}
TestGrow(1024);
TestGrow(1024, { maxByteLength: 2048 });
TestGrow(0);
TestGrow(0, { maxByteLength: 2048 });

function TestNonGrow(len, opts) {
  for (let newLen of [len / 2, 
                      0        
                     ]) {
    let ab = new ArrayBuffer(len, opts);
    let resizable = ab.resizable;
    WriteTestData(ab);
    const xfer = ab.transfer(newLen);
    print(newLen, xfer.byteLength);
    print(resizable, xfer.resizable);
    if (len > 0) AssertBufferContainsTestData(xfer);
    AssertDetached(ab);
  }
}
TestNonGrow(1024);
TestNonGrow(1024, { maxByteLength: 2048 });
TestNonGrow(0);
TestNonGrow(0, { maxByteLength: 2048 });

(function TestParameterConversion() {
  const len = 1024;
  {
    let ab = new ArrayBuffer(len);
    const detach = { valueOf() { $.detachArrayBuffer(ab); return len; } };
    print(() => ab.transfer(detach), TypeError);
  }

  {
    let ab = new ArrayBuffer(len, { maxByteLength: len * 4 });
    let resizable = ab.resizable;
    const shrink = { valueOf() { ab.resize(len / 2); return len; } };
    const xfer = ab.transfer(shrink);
    print(resizable, xfer.resizable);
    print(len, xfer.byteLength);
  }

  {
    let ab = new ArrayBuffer(len, { maxByteLength: len * 4 });
    let resizable = ab.resizable;
    const grow = { valueOf() { ab.resize(len * 2); return len; } };
    const xfer = ab.transfer(grow);
    print(resizable, xfer.resizable);
    print(len, xfer.byteLength);
  }
})();

(function TestCannotBeSAB() {
  const len = 1024;
  let sab = new SharedArrayBuffer(1024);
  let gsab = new SharedArrayBuffer(len, { maxByteLength: len * 4 });

  print(() => ArrayBuffer.prototype.transfer.call(sab), TypeError);
  print(() => ArrayBuffer.prototype.transfer.call(gsab), TypeError);
})();

(function TestInvalidLength() {
  for (let newLen of [-1024, Number.MAX_SAFE_INTEGER + 1]) {
    let ab = new ArrayBuffer(1024);
    print(() => ab.transfer(newLen), RangeError);
  }
})();

(function TestEmptySourceStore() {
  let ab = new ArrayBuffer();
  let xfer = ab.transfer().transfer(1024);
})();

if (typeof WebAssembly !== 'undefined') {
  
  const memory = new WebAssembly.Memory({ initial: 1 });
  print(() => memory.buffer.transfer(), TypeError);
}
