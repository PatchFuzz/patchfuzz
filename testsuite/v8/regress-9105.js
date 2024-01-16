



let array = new Uint32Array(32);
array[10] = 10; array[20] = 20;

Array.prototype.sort.call(array);
assertEquals(32, array.length);
assertEquals(10, array[30]);
assertEquals(20, array[31]);
