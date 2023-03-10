

function testImports() {
  var mod = `
    (module
      (type (func (param i32 i32)))
      (import "m" "exn" (tag (type 0))))
 `;

  print(
    () => print(mod, { m: { exn: "not a tag" } }),
    WebAssembly.LinkError,
    /import object field 'exn' is not a Tag/
  );
}

function testExports() {
  var exports1 = print(`
    (module (type (func)) (tag (export "exn") (type 0)))
  `).exports;

  print(typeof exports1.exn, "object");
  print(exports1.exn instanceof WebAssembly.Tag, true);

  var exports2 = print(`
    (module
      (type (func (param i32 i32)))
      (tag (export "exn") (type 0)))
  `).exports;

  print(typeof exports2.exn, "object");
  print(exports2.exn instanceof WebAssembly.Tag, true);
}

function testImportExport() {
  var exports = print(`
    (module
      (type (func (param i32)))
      (tag (export "exn") (type 0)))
  `).exports;

  print(
    `
    (module
      (type (func (param i32)))
      (import "m" "exn" (tag (type 0))))
  `,
    { m: exports }
  );

  print(
    () => {
      print(
        `
      (module
        (type (func (param)))
        (import "m" "exn" (tag (type 0))))
    `,
        { m: exports }
      );
    },
    WebAssembly.LinkError,
    /imported tag 'm.exn' signature mismatch/
  );
}


function testDescriptions() {
  const imports = WebAssembly.Module.imports(
    new WebAssembly.Module(
      print(`
        (module $m
          (type (func))
          (import "m" "e" (tag (type 0))))
      `)
    )
  );

  const exports = WebAssembly.Module.exports(
    new WebAssembly.Module(
      print(`
        (module
          (type (func))
          (tag (export "e") (type 0)))
      `)
    )
  );

  print(imports[0].module, "m");
  print(imports[0].name, "e");
  print(imports[0].kind, "tag");

  print(exports[0].name, "e");
  print(exports[0].kind, "tag");
}

testImports();
testExports();
testImportExport();
testDescriptions();
