





arr = new Array();
Object.defineProperty(arr, "length", {value: 3, writable: false});
function foo(i, v) { arr[i] = v; }
foo(3);
foo(3, 3);
assertEquals(arr[3], undefined);
