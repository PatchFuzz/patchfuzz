





function store(ar, index) {
  ar[index] = "a";
}

let growable_array = [];


store(growable_array, 0);
store(growable_array, 1);
store(growable_array, 2);
store(growable_array, 3);


var array = [];
Object.defineProperty(array, "length", { value: 3, writable: false });

store(array, 0);
store(array, 1);


store(array, 3);
assertEquals(undefined, array[3]);
assertEquals(3, array.length);
