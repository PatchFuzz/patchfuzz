




function asmModule() {
  "use asm";

  let a = [1];
  for (let i = 0; i < 2; i++) { 
    a[0] = 1;
    if (i > 0) {
      a[0] = {}; 
    }
  }

  function f(v) {
    v = v | 0;
    return v | 0;
  }
  return f;
}

asmModule(1);
print("PASSED");
