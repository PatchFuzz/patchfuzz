const buffer = new Float16Array(2);
const arr = new Int32Array(buffer.buffer);
arr[0] = 0x7F800001;
print(0x7F800001, (new Int32Array(buffer.slice().buffer))[0]);
