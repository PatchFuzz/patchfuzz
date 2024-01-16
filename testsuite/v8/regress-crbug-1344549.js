









let ab = new ArrayBuffer();
let dv = new DataView(ab);
%ArrayBufferDetach(ab);

function TestByteLength(dv) {
  let caught = 0;
  for (let i = 0; i < 64; i++) {
    try {
      dv.byteLength;
    } catch (e) {
      caught++;
    }
    if (i == 2) %OptimizeOsr();
  }
  assertEquals(64, caught);
}
%PrepareFunctionForOptimization(TestByteLength);
TestByteLength(dv);

function TestByteOffset(dv) {
  let caught = 0;
  for (let i = 0; i < 64; i++) {
    try {
      dv.byteOffset;
    } catch (e) {
      caught++;
    }
    if (i == 2) %OptimizeOsr();
  }
  assertEquals(64, caught);
}
%PrepareFunctionForOptimization(TestByteOffset);
TestByteOffset(dv);
