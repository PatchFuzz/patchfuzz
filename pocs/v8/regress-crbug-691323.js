var buffer = new ArrayBuffer(0x100);
var array = new Uint8Array(buffer).fill(55);
var tmp = {};
tmp[Symbol.toPrimitive] = function () {
  %ArrayBufferDetach(array.buffer)
  return 0;
};


print(-1, Array.prototype.indexOf.call(array, 0x00, tmp));

buffer = new ArrayBuffer(0x100);
array = new Uint8Array(buffer).fill(55);
tmp = {};
tmp[Symbol.toPrimitive] = function () {
  %ArrayBufferDetach(array.buffer)
  return 0;
};


print(false, Array.prototype.includes.call(array, 0x00, tmp));

buffer = new ArrayBuffer(0x100);
array = new Uint8Array(buffer).fill(55);
tmp = {};
tmp[Symbol.toPrimitive] = function () {
  %ArrayBufferDetach(array.buffer)
  return 0;
};
print(true, Array.prototype.includes.call(array, undefined, tmp));
