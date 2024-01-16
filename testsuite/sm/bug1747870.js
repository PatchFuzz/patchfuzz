




const MaxParams = 1000;         

var params = '';
for ( var i=0 ; i < MaxParams-1; i++ ) {
    params += '(param v128) '
}
params += '(param externref)'

new WebAssembly.Module(wasmTextToBinary(`
(module
  (func $f)
  (func ${params} (result externref)
    (call $f)
    (local.get ${MaxParams-1})))`));
