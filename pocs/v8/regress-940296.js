let table = new WebAssembly.Table({element: "anyfunc", initial: 1});
print(() => table.get(3612882876), RangeError);
