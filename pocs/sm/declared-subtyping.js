function print(types) {
  wasmValidateText(`(module
    ${types}
  )`);
}

function print(types) {
  print(() => {
    print(types);
  }, WebAssembly.CompileError, /incompatible super type/);
}

print(`(type $a (sub (array i32))) (type $b (sub $a (array i32)))`);
print(`(type $a (sub (array (mut i32)))) (type $b (sub $a (array (mut i32))))`);
print(`(type $a (sub (array i32))) (type $b (sub $a (array (mut i32))))`);
print(`(type $a (sub (array (mut i32)))) (type $b (sub $a (array i32)))`);
