
function test_bad_imports(t) {
  for (const value of [null, true, "", Symbol(), 1, 0.1, NaN]) {
    t(`Non-object imports argument: ${format_value(value)}`,
      new TypeError(),
      builder => {},
      value);
  }

  for (const value of [undefined, null, true, "", Symbol(), 1, 0.1, NaN]) {
    const imports = {
      "module": value,
    };
    t(`Non-object module: ${format_value(value)}`,
      new TypeError(),
      builder => {
        builder.addImport("module", "fn", kSig_v_v);
      },
      imports);
  }

  t(`Missing imports argument`,
    new TypeError(),
    builder => {
      builder.addImport("module", "fn", kSig_v_v);
    });

  for (const [value, name] of [[undefined, "undefined"], [{}, "empty object"], [{ "module\0": null }, "wrong property"]]) {
    t(`Imports argument with missing property: ${name}`,
      new TypeError(),
      builder => {
        builder.addImport("module", "fn", kSig_v_v);
      },
      value);
  }

  t(`Importing an i64 global`,
    new WebAssembly.LinkError(),
    builder => {
      builder.addImportedGlobal("module", "global", kWasmI64);
    },
    {
      "module": {
        "global": 0,
      },
    });

  for (const value of [undefined, null, true, "", Symbol(), 1, 0.1, NaN, {}]) {
    t(`Importing a function with an incorrectly-typed value: ${format_value(value)}`,
      new WebAssembly.LinkError(),
      builder => {
        builder.addImport("module", "fn", kSig_v_v);
      },
      {
        "module": {
          "fn": value,
        },
      });
  }

  const nonGlobals = [
    [undefined],
    [null],
    [true],
    [""],
    [Symbol()],
    [{}, "plain object"],
    
    
    
  ];

  for (const [value, name = format_value(value)] of nonGlobals) {
    t(`Importing a global with an incorrectly-typed value: ${name}`,
      new WebAssembly.LinkError(),
      builder => {
        builder.addImportedGlobal("module", "global", kWasmI32);
      },
      {
        "module": {
          "global": value,
        },
      });
  }

  const nonMemories = [
    [undefined],
    [null],
    [true],
    [""],
    [Symbol()],
    [1],
    [0.1],
    [NaN],
    [{}, "plain object"],
    [WebAssembly.Memory, "WebAssembly.Memory"],
    [WebAssembly.Memory.prototype, "WebAssembly.Memory.prototype"],
    [Object.create(WebAssembly.Memory.prototype), "Object.create(WebAssembly.Memory.prototype)"],
  ];

  for (const [value, name = format_value(value)] of nonMemories) {
    t(`Importing memory with an incorrectly-typed value: ${name}`,
      new WebAssembly.LinkError(),
      builder => {
        builder.addImportedMemory("module", "memory", 0, 128);
      },
      {
        "module": {
          "memory": value,
        },
      });
  }

  const nonTables = [
    [undefined],
    [null],
    [true],
    [""],
    [Symbol()],
    [1],
    [0.1],
    [NaN],
    [{}, "plain object"],
    [WebAssembly.Table, "WebAssembly.Table"],
    [WebAssembly.Table.prototype, "WebAssembly.Table.prototype"],
    [Object.create(WebAssembly.Table.prototype), "Object.create(WebAssembly.Table.prototype)"],
  ];

  for (const [value, name = format_value(value)] of nonTables) {
    t(`Importing table with an incorrectly-typed value: ${name}`,
      new WebAssembly.LinkError(),
      builder => {
        builder.addImportedTable("module", "table", 0, 128);
      },
      {
        "module": {
          "table": value,
        },
      });
  }
}
