





const array = new Array();
array[0x80000] = 1;
array.unshift({});
assertThrows(() => new WeakMap(array));
