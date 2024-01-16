








function func() {
  return;
}

function asm_func() {
  "use asm";
  function f(){}
  return {f:f};
}

function failed_asm_func() {
  "use asm";
  
  [x,y,z] = [1,2,3];
  return;
}

func();
asm_func();
failed_asm_func();
