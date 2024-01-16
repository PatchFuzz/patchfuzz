



let table = new WebAssembly.Table({element: "anyfunc", initial: 1});
assertThrows(() => table.get(3612882876), RangeError);
