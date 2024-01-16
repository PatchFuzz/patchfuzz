


test('anyref', WasmAnyrefValues, WasmNonAnyrefValues);
test('eqref', WasmEqrefValues, WasmNonAnyrefValues);
test('structref', WasmStructrefValues, WasmNonAnyrefValues);
test('arrayref', WasmArrayrefValues, WasmNonAnyrefValues);
let { newStruct } = wasmEvalText(`
  (module
    (type $s (struct))
    (func (export "newStruct") (result anyref)
        struct.new $s)
  )`).exports;
test('(ref null 0)', [newStruct()], WasmNonAnyrefValues, '(type (struct))');

function test(type, validValues, invalidValues, typeSection) {
  const CheckError = /can only pass|bad type/;

  if (!typeSection) {
    typeSection = "";
  }

  
  let {a} = wasmEvalText(`(module
    ${typeSection}
    (func (export "a") (param ${type}))
  )`).exports;
  for (let val of invalidValues) {
    assertErrorMessage(() => a(val), TypeError, CheckError);
  }
  for (let val of validValues) {
    a(val);
  }

  
  for (let val of invalidValues) {
    function returnVal() {
      return val;
    }
    let {test} = wasmEvalText(`(module
      ${typeSection}
      (func $returnVal (import "" "returnVal") (result ${type}))
      (func (export "test")
        call $returnVal
        drop
      )
    )`, {"": {returnVal}}).exports;
    assertErrorMessage(() => test(), TypeError, CheckError);
  }
  for (let val of validValues) {
    function returnVal() {
      return val;
    }
    let {test} = wasmEvalText(`(module
      ${typeSection}
      (func $returnVal (import "" "returnVal") (result ${type}))
      (func (export "test")
        call $returnVal
        drop
      )
    )`, {"": {returnVal}}).exports;
    test(val);
  }

  
  if (typeSection !== "") {
    return;
  }

  
  for (let val of validValues) {
    
    let a = new WebAssembly.Global({value: type}, val);
    assertEq(a.value, val, 'roundtrip matches');

    
    let b = new WebAssembly.Global({value: type, mutable: true}, null);
    b.value = val;
    assertEq(b.value, val, 'roundtrip matches');
  }
  for (let val of invalidValues) {
    
    assertErrorMessage(() => new WebAssembly.Global({value: type}, val),
      TypeError,
      CheckError);

    
    let a = new WebAssembly.Global({value: type, mutable: true}, null);
    assertErrorMessage(() => a.value = val,
      TypeError,
      CheckError);
  }

  
  for (let val of validValues) {
    let table = new WebAssembly.Table({element: type, initial: 1, maximum: 1});
    table.set(0, val);
    assertEq(table.get(0), val, 'roundtrip matches');
  }
  for (let val of invalidValues) {
    let table = new WebAssembly.Table({element: type, initial: 1, maximum: 1});
    assertErrorMessage(() => table.set(0, val),
      TypeError,
      CheckError);
  }
}
