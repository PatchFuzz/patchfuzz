let kArrayBufferByteLengthLimit = %ArrayBufferMaxByteLength() + 1;


let ab = new ArrayBuffer(kArrayBufferByteLengthLimit - 1);

function TestArray(constr, elementSize) {
  print(elementSize, constr.BYTES_PER_ELEMENT);
  print(kArrayBufferByteLengthLimit % elementSize, 0);
  let ta_limit = kArrayBufferByteLengthLimit / elementSize;

  print(() => new constr(ab, 0, ta_limit), RangeError);

  
  new constr(ab, 0, ta_limit - 1);
}

TestArray(Uint8Array, 1);
TestArray(Int8Array, 1);
TestArray(Uint16Array, 2);
TestArray(Int16Array, 2);
TestArray(Uint32Array, 4);
TestArray(Int32Array, 4);
TestArray(Float32Array, 4);
TestArray(Float64Array, 8);
TestArray(Uint8ClampedArray, 1);
