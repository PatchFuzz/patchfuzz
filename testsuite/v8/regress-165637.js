




var holey_array = [1, 2, 3, 4, 5,,,,,,];
assertEquals(new Array(1), holey_array.slice(6, 7));
assertEquals(undefined, holey_array.slice(6, 7)[0]);
assertEquals([], holey_array.slice(2, 1));
assertEquals(3, holey_array.slice(2, 3)[0]);
