



var {fixupI64Return} = WScript.LoadScriptFile("./wasmutils.js");

const module = new WebAssembly.Module(readbuffer('binaries/table_imports.wasm'));

function customAdd(a, b) {
  print("custom add (+5.42)");
  return a + b + 5.42;
}

const types = [{
  name: "binopI32",
  start: 0,
}, {
  name: "binopI64",
  start: 2,
  trap: [3] 
}, {
  name: "binopF32",
  start: 4,
}, {
  name: "binopF64",
  start: 6,
}];

function runTests(exports) {
  types.forEach(({name, start, trap = []}) => {
    const end = start + 1; 
    const isValidRange = i => i >= start && i <= end;
    for(let i = 0; i < 8; ++i) {
      try {
        const val = exports[name](1, 2, i);
        print(val);
        if (trap.includes(i)) {
          print(`${name}[${i}] failed. Expected to trap`);
        }
      } catch (e) {
        if (isValidRange(i) && !trap.includes(i)) {
          print(`${name}[${i}] failed. Unexpected error: ${e}`);
        }
      }
    }
  });
}

const {exports} = new WebAssembly.Instance(module, {
  math: {
    addI32: customAdd,
    addI64: customAdd,
    addF32: customAdd,
    addF64: customAdd,
  }
});
fixupI64Return(exports, "binopI64");
runTests(exports);

print("\n\n Rerun tests with new instance using previous module's imports");
const {exports: exports2} = new WebAssembly.Instance(module, {math: exports});

types[1].trap = [];
fixupI64Return(exports2, "binopI64");
runTests(exports2);
