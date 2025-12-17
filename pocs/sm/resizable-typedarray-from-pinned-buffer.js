let ab = new ArrayBuffer(8, {maxByteLength: 10});

pinArrayBufferOrViewLength(ab);

let ta = new Int8Array(ab);

print(ta.length, 8);
