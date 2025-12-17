function outer() {
  function asm_broken(a, import_obj) {
    "use asm";
    
    
    var v = import_obj.x;
    function inner() {
    }
    return inner;
  }
  var m = asm_broken();
}

print(outer);
gc();
print(outer);
