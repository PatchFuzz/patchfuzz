





let array = new Array(1);
array.splice(1, 0, array);

assertThrows(() => array.flat(Infinity), RangeError);
