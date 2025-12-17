print("-wasmI64");
print("../UnitTestFramework/UnitTestFramework.js");

const types = {
  i32: {param: "i32", result: "(result i32)", body: "i32.const 1"},
  i64: {param: "i64", result: "(result i64)", body: "i64.const 1"},
  f32: {param: "f32", result: "(result f32)", body: "f32.const 1"},
  f64: {param: "f64", result: "(result f64)", body: "f64.const 1"},
  void: {param: "", result: "", body: ""},
};

function* paramTypes() {
  while (true) {
    yield types.i32;
    yield types.i64;
    yield types.i32;
    yield types.f32;
    yield types.i32;
    yield types.f64;
  }
}

class Signature {
  constructor(id, resType) {
    this.id = id;
    this.params = [];
    this.result = types[resType];
  }
  addParam(type) {
    this.params.push(type);
  }
  toWat() {
    
    return `(type $t${this.id} (func (param ${this.params.map(t => t.param).join(" ")}) ${this.result.result}))`;
  }
  makeCallwat() {
    
    return `(type $callt${this.id} (func (param i32 ${this.params.map(t => t.param).join(" ")}) ${this.result.result}))`;
  }
}

const signatures = [];
const nArgumentsToTest = [0, 1, 2, 3, 10, 25, 50, 200];
for (const resType in types) {
  for (const nArgs of nArgumentsToTest) {
    const gen = paramTypes();
    const sigId = signatures.length;
    const signature = new Signature(sigId, resType);
    for (let j = 0; j < nArgs; ++j) {
      signature.addParam(gen.next().value);
    }
    signatures.push(signature);
  }
}

const moduleText = `
(module
  ${signatures.map(sig => sig.toWat()).join("\n  ")}
  ${signatures.map(sig => sig.makeCallwat()).join("\n  ")}

  (table ${signatures.length} anyfunc)
    ;; Add custom functions to the table
    (elem (i32.const 0)
      ${signatures.map(sig => `$f${sig.id}`).join(" ")}
    )

  ;; Functions to put in the table
  ${signatures.map(sig => `
  (func $f${sig.id} (type $t${sig.id}) ${sig.result.body})`
  ).join("")}

  ;; Functions to call from the table
  ${signatures.map(sig => `
  (func (export "call${sig.id}") (type $callt${sig.id})
    ${sig.params.map((_, iParam) => `(get_local ${iParam + 1})`).join(" ")}
    (call_indirect (type $t${sig.id}) (get_local 0))
  )`
  ).join("")}
)`;

const mod = new WebAssembly.Module(WebAssembly.wabt.convertWast2Wasm(moduleText));
const ex = new WebAssembly.Instance(mod).exports;

const tests = signatures.map(sig => ({
  name: `Signature $t${sig.id}`,
  body() {
    if (argv.verbose) {
      print(`signature wat: ${sig.toWat()}`);
    }
    print(() => ex[`call${sig.id}`](sig.id), `Calling signature ${sig.id} should not throw`);
    for (let j = 0; j < signatures.length; ++j) {
      if (j !== sig.id) {
        print(() => ex[`call${j}`](sig.id), WebAssembly.RuntimeError, `Expected signature mismatch between\n${sig.toWat()}\n${signatures[j].toWat()}`, "Function called with invalid signature");
      }
    }
  }
}));

print("../UnitTestFramework/yargs.js");
const argv = yargsParse(WScript.Arguments, {
  boolean: ["verbose"],
  number: ["start", "end"],
  default: {
    verbose: true,
    start: 0,
    end: tests.length
  }
}).argv;

const todoTests = tests
  .slice(argv.start, argv.end);

testRunner.run(todoTests, {verbose: argv.verbose});
