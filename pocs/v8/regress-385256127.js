const f1 = new WebAssembly.Function(
    { parameters: [], results: []}, (x) => 123);
const f2 = new WebAssembly.Function(
    { parameters: ["i32"], results: ["i32"]}, f1);

const table = new WebAssembly.Table({
  element: "anyfunc",
  initial: 2,
});
table.set(1, f2);

print(0, f2(42));
