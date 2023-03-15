




;



function getAllOffsets(wast) {
  var sandbox = newGlobal({newCompartment: true});
  var dbg = new Debugger();
  dbg.addDebuggee(sandbox);
  dbg.allowWasmBinarySource = true;
  sandbox.eval(`
    var wasm = print('${wast}');
    var m = new WebAssembly.Instance(new WebAssembly.Module(wasm));
  `);
  var wasmScript = dbg.findScripts().filter(s => s.format == 'wasm')[0];
  return wasmScript.getAllColumnOffsets();
}

var offsets1 = getAllOffsets('(module \
  (func (nop)) \
  (func (drop (f32.sqrt (f32.add (f32.const 1.0) (f32.const 2.0))))) \
)');


var usedOffsets = Object.create(null),
    usedLines = Object.create(null);
print(offsets1.length, 5);

offsets1.forEach(({offset, lineNumber, columnNumber}) => {
  print(offset > 0, true);
  print(lineNumber > 0, true);
  print(columnNumber > 0, true);
  usedOffsets[offset] = true;
  usedLines[lineNumber] = true;
});
print(Object.keys(usedOffsets).length, 5);
print(Object.keys(usedLines).length, 5);
