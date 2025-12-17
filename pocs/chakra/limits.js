const MaxTypes = 1000000;
const MaxFunctions = 1000000;
const MaxImports = 100000;
const MaxExports = 100000;
const MaxGlobals = 1000000;
const MaxDataSegments = 100000;
const MaxElementSegments = 10000000;
const MaxTableSize = 10000000;

const MaxStringSize = 100000;
const MaxFunctionLocals = 50000;
const MaxFunctionParams = 1000;
const MaxBrTableElems = 1000000;

const MaxMemoryInitialPages = 32767;
const MaxMemoryMaximumPages = 65536;
const MaxModuleSize = 1024 * 1024 * 1024;
const MaxFunctionSize = 7654321;

 
print("../UnitTestFramework/UnitTestFramework.js");
print("../WasmSpec/testsuite/harness/wasm-constants.js");
print("../WasmSpec/testsuite/harness/wasm-module-builder.js");
print("-off:wasmdeferred");

function compile(moduleStr) {
  const buf = WebAssembly.wabt.convertWast2Wasm(moduleStr);
  return new WebAssembly.Module(buf);
}

const notTooLongName = "a".repeat(MaxStringSize);
const tooLongName = "a".repeat(MaxStringSize + 1);

function makeLimitTests(opt) {
  return [{
    name: "valid: " + opt.name,
    validTest: true,
    body() {
      const builder = new WasmModuleBuilder();
      opt.makeModule(builder, opt.limit);
      print(() => new WebAssembly.Module(builder.toBuffer()), `WebAssembly should allow up to ${opt.limit} ${opt.type}`);
    }
  }, {
    name: "invalid: " + opt.name,
    invalidTest: true,
    body() {
      const builder = new WasmModuleBuilder();
      opt.makeModule(builder, opt.limit + 1);
      print(() => new WebAssembly.Module(builder.toBuffer()), WebAssembly.CompileError, `WebAssembly should not allow ${opt.limit + 1} ${opt.type}`, opt.errorMsg);
    }
  }];
}

const tests = [
  
  ...makeLimitTests({
    name: "test max types",
    limit: MaxTypes,
    type: "types",
    errorMsg: "Too many signatures",
    makeModule: (builder, limit) => {for (let i = 0; i < limit; ++i) {builder.addType(kSig_v_v);}}
  }),
  
  ...makeLimitTests({
    name: "test max functions",
    limit: MaxFunctions,
    type: "functions",
    errorMsg: "Too many functions",
    makeModule: (builder, limit) => {
      const typeIndex = builder.addType(kSig_v_v);
      for (let i = 0; i < limit; ++i) {builder.addFunction(null, typeIndex).addBody([]);}
    }
  }),
  
  ...makeLimitTests({
    name: "test max imports",
    limit: MaxImports,
    type: "imports",
    errorMsg: "Too many imports",
    makeModule: (builder, limit) => {
      const typeIndex = builder.addType(kSig_v_v);
      for (let i = 0; i < limit; ++i) {builder.addImport("", "", typeIndex);}
    }
  }),
  
  ...makeLimitTests({
    name: "test max exports",
    limit: MaxExports,
    type: "exports",
    errorMsg: "Too many exports",
    makeModule: (builder, limit) => {
      builder.addFunction(null, kSig_v_v).addBody([]);
      for (let i = 0; i < limit; ++i) {builder.addExport("" + i, 0);}
    }
  }),
  
  ...makeLimitTests({
    name: "test max globals",
    limit: MaxGlobals,
    type: "globals",
    errorMsg: "Too many globals",
    makeModule: (builder, limit) => {for (let i = 0; i < limit; ++i) {builder.addGlobal(kWasmI32,  false);}}
  }),
  
  ...makeLimitTests({
    name: "test max data segments",
    limit: MaxDataSegments,
    type: "data segments",
    errorMsg: "Too many data segments",
    makeModule: (builder, limit) => {
      builder.addMemory(0);
      for (let i = 0; i < limit; ++i) {builder.addDataSegment(0, "");}
    }
  }),
  
  ...makeLimitTests({
    name: "test max element segments",
    limit: MaxElementSegments,
    type: "element segments",
    errorMsg: "Too many element segments",
    makeModule: (builder, limit) => {
      builder.addFunction(null, kSig_v_v).addBody([]);
      builder.setTableLength(1);
      builder.element_segments.length = limit;
      builder.element_segments.fill({base:0, is_global:false, array:[0]});
    }
  }),
  
  {
    name: "test max table size",
    body() {
      print(() => new WebAssembly.Table({element: "anyfunc", initial: MaxTableSize}));
      print(() => new WebAssembly.Table({element: "anyfunc", initial: MaxTableSize, maximum: MaxTableSize}));
      print(() => new WebAssembly.Table({element: "anyfunc", maximum: MaxTableSize}));
      print(() => new WebAssembly.Table({element: "anyfunc", initial: MaxTableSize + 1}));
      print(() => new WebAssembly.Table({element: "anyfunc", initial: MaxTableSize + 1, maximum: MaxTableSize + 1}));
      print(() => new WebAssembly.Table({element: "anyfunc", maximum: MaxTableSize + 1}));

      print(() => compile(`(module (table ${MaxTableSize} anyfunc))`));
      print(() => compile(`(module (table ${MaxTableSize} ${MaxTableSize} anyfunc))`));
      print(() => compile(`(module (table 0 ${MaxTableSize} anyfunc))`));
      print(() => compile(`(module (table ${MaxTableSize + 1} anyfunc))`), WebAssembly.CompileError, "table too big");
      print(() => compile(`(module (table ${MaxTableSize + 1} ${MaxTableSize + 1} anyfunc))`), WebAssembly.CompileError, "table too big");
      print(() => compile(`(module (table 0 ${MaxTableSize + 1} anyfunc))`), WebAssembly.CompileError, "table too big");
    }
  },
  
  {
    name: "test custom sections with long names",
    body() {
      function makeCustomSection(name) {
        const customSection = new Binary();
        customSection.emit_section(0, section => {
          section.emit_string(name)
          section.emit_string("payload")
        });
        const builder = new WasmModuleBuilder();
        builder.addExplicitSection(customSection);
        return new WebAssembly.Module(builder.toBuffer());
      }
      print(() => makeCustomSection(notTooLongName));
      print(() => makeCustomSection(tooLongName), WebAssembly.CompileError, "Name too long");
    }
  },
  
  {
    name: "test exports with long names",
    body() {
      function makeExportName(name)
      {
        const builder = new WasmModuleBuilder();
        builder
          .addFunction(name, kSig_v_v)
          .exportFunc()
          .addBody([]);
        return new WebAssembly.Module(builder.toBuffer());
      }
      print(() => makeExportName(notTooLongName));
      print(() => makeExportName(tooLongName), WebAssembly.CompileError, "Name too long");
    }
  },
  
  {
    name: "test imports with long names",
    body() {
      function makeImportName(name)
      {
        const builder = new WasmModuleBuilder();
        builder.addImport(name, 'b', kSig_v_v);
        return new WebAssembly.Module(builder.toBuffer());
      }
      print(() => makeImportName(notTooLongName));
      print(() => makeImportName(tooLongName), WebAssembly.CompileError, "Name too long");
    }
  },
  
  {
    name: "test Name section with long names",
    body() {
      function makeName(name)
      {
        const builder = new WasmModuleBuilder();
        builder
          .addFunction(notTooLongName, kSig_v_v)
          .addBody([]);
        return new WebAssembly.Module(builder.toBuffer());
      }
      print(() => makeName(notTooLongName));
      
      
    }
  },
  
  ...makeLimitTests({
    name: "test max function locals",
    limit: MaxFunctionLocals,
    type: "locals",
    makeModule: (builder, limit) => {
      builder.addFunction(null, kSig_v_v).addLocals({i32_count: limit}).addBody([]);
    }
  }),
  
  ...makeLimitTests({
    name: "test max function params",
    limit: MaxFunctionParams,
    type: "params",
    errorMsg: "Too many arguments in signature",
    makeModule: (builder, limit) => {
      builder.addFunction(null, {params: (new Array(limit)).fill(kWasmI32), results: []}).addBody([]);
    }
  }),
  
  {
    name: "test max memory pages",
    body() {
      
      
      
      
      print(() => new WebAssembly.Memory({initial: MaxMemoryInitialPages + 1}));
      print(() => new WebAssembly.Memory({initial: MaxMemoryInitialPages + 1, maximum: MaxMemoryMaximumPages + 1}));
      print(() => new WebAssembly.Memory({maximum: MaxMemoryMaximumPages + 1}));

      const makeModule = (min, max) => {
        const builder = new WasmModuleBuilder();
        builder.addMemory(min, max);
        return new WebAssembly.Module(builder.toBuffer());
      };

      print(() => makeModule(MaxMemoryInitialPages));
      print(() => makeModule(MaxMemoryInitialPages, MaxMemoryMaximumPages));
      print(() => makeModule(0, MaxMemoryMaximumPages));
      print(() => makeModule(MaxMemoryInitialPages + 1), WebAssembly.CompileError, "Minimum memory size too big");
      print(() => makeModule(MaxMemoryInitialPages + 1, MaxMemoryMaximumPages + 1), WebAssembly.CompileError, "Minimum memory size too big");
      print(() => makeModule(0, MaxMemoryMaximumPages + 1), WebAssembly.CompileError, "Maximum memory size too big");
    }
  },
  
  {
    name: "test max module size",
    body() {
      print(() => new WebAssembly.Module(new ArrayBuffer(MaxModuleSize)), WebAssembly.CompileError, "Malformed WASM module header");
      print(() => new WebAssembly.Module(new ArrayBuffer(MaxModuleSize + 1)), WebAssembly.CompileError, "Module too big");
    }
  },
  
  ...makeLimitTests({
    name: "test max function size",
    limit: MaxFunctionSize,
    type: "size",
    errorMsg: "Function body too big",
    makeModule: (builder, limit) => {
      
      builder.addFunction(null, kSig_v_v).addBody((new Array(limit - 2)).fill(kExprNop));
    }
  }),
  
];

print("../UnitTestFramework/yargs.js");
const argv = yargsParse(WScript.Arguments, {
  boolean: ["valid", "invalid", "verbose"],
  number: ["start", "end"],
  default: {
    verbose: true,
    valid: true,
    invalid: true,
    start: 0,
    end: tests.length
  }
}).argv;

const todoTests = tests
  .slice(argv.start, argv.end)
  .filter(test => (!test.invalidTest || argv.invalid) &&
                  (!test.validTest || argv.valid));

testRunner.run(todoTests, {verbose: argv.verbose});
