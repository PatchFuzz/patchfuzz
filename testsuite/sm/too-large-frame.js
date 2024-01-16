

try {

wasmEvalText(
`(module
  (func $func0 (result i32) ${locals()}
   (i32.const 0))
  (export "" (func 0)))`);

} catch (e) {
    
    
    if (!String(e).match(/out of memory/))
        throw e;
}





function locals() {
    var s = "";
    for ( var i=0 ; i < 50000 ; i++ )
        s += "(local f64)\n";
    return s;
}
