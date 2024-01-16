




























var array = new Int16Array(23);
array[7] = 7; array[9] = 9;
assertEquals(23, array.length);
assertEquals(7, array[7]);
assertEquals(9, array[9]);

Array.prototype.sort.call(array);
assertEquals(23, array.length);
assertEquals(7, array[21]);
assertEquals(9, array[22]);
