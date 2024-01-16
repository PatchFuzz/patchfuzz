


for ( let i=100; i < 300; i++ ) {
    let xs = new Array(i).fill(1);

    
    assertErrorMessage(() => new WebAssembly.Module(wasmTextToBinary(`
(module
  (func $f (result ${xs.map(_ => 'i32 ').join(' ')})
    ${xs.map((_) => '(i32.const 1)').join(' ')})
  (func $g
    (call $f)))`)),
                       WebAssembly.CompileError,
                       /(unused values not explicitly dropped)|(values remaining on stack)/);

}
