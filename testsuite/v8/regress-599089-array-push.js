




var array = [1.2, 1.2];
array.length = 0;
array.push(undefined);
assertEquals(1, array.length);
assertEquals([undefined], array);
