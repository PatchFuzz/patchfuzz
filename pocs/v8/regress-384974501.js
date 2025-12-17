let func = new WebAssembly.Function(
    {parameters: [], results: []}, () => {});
let table = new WebAssembly.Table({element: 'anyfunc', initial: 2});
table.set(0, func);
table.grow(1, func);



let func2 = new WebAssembly.Function(
    {parameters: ['v128'], results: []}, (_) => {});
table.set(1, func2);
table.grow(1, func2);
