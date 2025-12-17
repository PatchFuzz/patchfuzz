let kArrayBufferByteLengthLimit = %ArrayBufferMaxByteLength() + 1;

function TestArray(constr, elementSize) {
  print(elementSize, constr.BYTES_PER_ELEMENT);
  let ta_limit = Math.ceil(kArrayBufferByteLengthLimit / elementSize);

  print(() => new constr(ta_limit), RangeError);

  
  new constr(ta_limit - 1);
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
