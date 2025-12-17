let array = new Uint32Array(32);
array[10] = 10; array[20] = 20;

Array.prototype.sort.call(array);
print(32, array.length);
print(10, array[30]);
print(20, array[31]);
