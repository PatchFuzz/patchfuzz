





var arr = [...[],,];
assertTrue(%HasHoleyElements(arr));
assertEquals(1, arr.length);
assertFalse(arr.hasOwnProperty(0));
assertEquals(undefined, arr[0]);

assertThrows(() => arr[0][0], TypeError);
