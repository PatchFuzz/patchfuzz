print("../UnitTestFramework/UnitTestFramework.js");
print("../WasmSpec/testsuite/harness/wasm-constants.js");
print("../WasmSpec/testsuite/harness/wasm-module-builder.js");

const tests = [{
  name: "polymorphic operators regression",
  usesWabt: true,
  body() {
    const toValidate = {
      "stack-polymorphic-yield": `
    (module
      (func (result i32)
        (block (result i32)
          (loop (br 0))
          unreachable
          drop
        )
      )
    )`,
      "stack-polymorphic-br_table": `
    (module
      (func (result i32)
        (block (result i32)
          unreachable
          drop
          (br_table 0 0)
        )
      )
    )`,
      "stack-polymorphic-br": `
    (module
      (func (result i32)
        unreachable
        drop
        br 0
      )
    )`,
      "stack-polymorphic-return": `
    (module
      (func (result i32)
        unreachable
        drop
        return
      )
    )`,
    };
    for (const key in toValidate) {
      print(WebAssembly.validate(WebAssembly.wabt.convertWast2Wasm(toValidate[key])), `Module ${key} should be valid`);
    }
  }
}, {
  name: "tracing regression test",
  usesWabt: false,
  body() {
    const tracingPrefix = 0xf0;
    const builder = new WasmModuleBuilder();
    const typeIndex = builder.addType(kSig_v_v);
    builder.addFunction("foo", typeIndex).addBody([
      tracingPrefix, 0x0,
    ]).exportFunc();

    try {
      const {exports: {foo}} = new WebAssembly.Instance(new WebAssembly.Module(builder.toBuffer()));
      foo();
      print("Failed: Tracing prefix should not be accepted");
    } catch (e) {
      if (!e.message.includes("Tracing opcodes not allowed")) {
        print("Wrong error: " + e);
      }
    }
  }
}, {
  name: "Error message truncation test",
  usesWabt: false,
  body() {
    const tracingPrefix = 0xf0;
    const builder = new WasmModuleBuilder();
    const typeIndex = builder.addType(kSig_v_v);
    const exportedName = Array(5000).fill("").map((_, i) => i.toString()).join("");
    builder.addFunction(exportedName, typeIndex).addBody([
      
      tracingPrefix, 0x0,
    ]).exportFunc();
    try {
      const {exports} = new WebAssembly.Instance(new WebAssembly.Module(builder.toBuffer()));
      exports[exportedName]();
      print("Failed: Compilation error expected");
    } catch (e) {
      
      const marker = "function ";
      const index = e.message.indexOf(marker);
      print(index !== -1);
      print(e.message.length - index === 2047);
      const sub = e.message.substring(index + marker.length, e.message.length);
      const funcNameLengthUsed = 2047 - marker.length;
      const funcNameUsed = exportedName.substring(0, funcNameLengthUsed);
      print(funcNameUsed, sub, "Error message truncation unexpected result");
    }
  }
}];

print("../UnitTestFramework/yargs.js");
const argv = yargsParse(WScript.Arguments, {
  boolean: ["verbose", "wabt"],
  number: ["start", "end"],
  default: {
    verbose: true,
    wabt: true,
    start: 0,
    end: tests.length
  }
}).argv;

let todoTests = tests
  .slice(argv.start, argv.end);
if (!argv.wabt) {
  todoTests = todoTests.filter(t => !t.usesWabt);
}

testRunner.run(todoTests, {verbose: argv.verbose});
