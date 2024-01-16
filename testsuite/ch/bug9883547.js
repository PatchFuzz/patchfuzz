




function AsmModule() {
  "use asm";
  function f() {
    var a = 0, b = 0.0;
    while((b) == 0.0) {
      b = +(a>>>0); 
      a = 5|0; 
    }
    return +b;
  }
  return f;
}

var f = AsmModule();
console.log("PASSED");
