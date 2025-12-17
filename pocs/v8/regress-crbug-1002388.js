(function TestTableSetAndGetFunction() {
  let func = new WebAssembly.Function({ parameters: [], results: [] }, x => x);
  let table = new WebAssembly.Table({ element: "anyfunc", initial: 1 });
  table.set(0, func);
  table.get(0);
})();
