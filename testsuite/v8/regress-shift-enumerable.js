



var arr = [1, 2];
Object.defineProperty(arr, 0xfffe, {
  value: 3,
  configurable: true,
  writable: true,
  enumerable: false
});
arr[0xffff] = 4;
arr.shift();
var desc = Object.getOwnPropertyDescriptor(arr, 0xfffe);
assertEquals(4, desc.value);
assertFalse(desc.enumerable);
