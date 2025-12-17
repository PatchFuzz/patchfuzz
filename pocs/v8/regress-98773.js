var array = new Int16Array(23);
array[7] = 7; array[9] = 9;
print(23, array.length);
print(7, array[7]);
print(9, array[9]);

Array.prototype.sort.call(array);
print(23, array.length);
print(7, array[21]);
print(9, array[22]);
