





























var nonArray = { length: 4, 0: 42, 2: 37, 3: undefined, 4: 0 };
Array.prototype.sort.call(nonArray);

assertEquals(4, nonArray.length, "preserve length");
assertEquals(37, nonArray[0], "sort smallest first");
assertEquals(42, nonArray[1], "sort largest last");
assertTrue(2 in nonArray, "don't delete undefined");
assertEquals(undefined, nonArray[2], "sort undefined after largest");
assertFalse(3 in nonArray, "don't create non-existing");
assertEquals(0, nonArray[4], "don't affect after length.");
