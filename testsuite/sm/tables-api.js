

function assertTableFilled(table, length, element) {
  assertEq(table.length, length);
  for (let i = 0; i < length; i++) {
    assertEq(table.get(i), element);
  }
}

const tableLength = 10;


for (let value of WasmExternrefValues) {
  let table = new WebAssembly.Table({'element': 'externref', initial: tableLength}, value);
  assertTableFilled(table, tableLength, value);
}
for (let value of WasmFuncrefValues) {
  let table = new WebAssembly.Table({'element': 'anyfunc', initial: tableLength}, value);
  assertTableFilled(table, tableLength, value);
}


{
  let table = new WebAssembly.Table({'element': 'externref', initial: tableLength});
  assertTableFilled(table, tableLength, undefined);
}


{
  let table = new WebAssembly.Table({'element': 'anyfunc', initial: tableLength});
  assertTableFilled(table, tableLength, null);
}



{
    let t = new WebAssembly.Table({element:"externref", initial: 1});
    
    t.set(0, '');
    
    t.set(0);
    
    assertEq(t.get(0), undefined);
}
{
    let t = new WebAssembly.Table({element:"anyfunc", initial: 1});
    
    t.set(0, WasmFuncrefValues[0]);
    
    t.set(0);
    
    assertEq(t.get(0), null);
}



{
    let t = new WebAssembly.Table({element:"externref", initial:0});
    t.grow(1);
    assertEq(t.get(t.length-1), undefined);
    let prev = undefined;
    for (let v of WasmExternrefValues) {
        t.grow(2, v);
        assertEq(t.get(t.length-3), prev);
        assertEq(t.get(t.length-2), v);

        assertEq(t.get(t.length-1), v);
        prev = v;
    }
}

{
    let t = new WebAssembly.Table({element:"anyfunc", initial:0});
    t.grow(1);
    assertEq(t.get(t.length-1), null);
    let prev = null;
    for (let v of WasmFuncrefValues) {
        t.grow(2, v);
        assertEq(t.get(t.length-3), prev);
        assertEq(t.get(t.length-2), v);

        assertEq(t.get(t.length-1), v);
        prev = v;
    }
}


{
    let t = new WebAssembly.Table({element:"externref", initial:1});
    t.set(0, 1337);
    t.grow(0, 1789);
    assertEq(t.get(0), 1337);
}
