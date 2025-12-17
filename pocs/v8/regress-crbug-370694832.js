print(() => class {
    static {
        class A {
            static {
                [].trigger_error();
            }
            static [eval(super.__proto__)];
        }
    }
});

print(function f() {
  let x;
  try {
    throw 0;
  }
  catch (x) {
    

    
    
    eval("var x;");
  }
});

(function f() {
  let x;
  try {
    throw 0;
  }
  catch (x) {
    

    
    
    eval("{ function x() {} }");
  }
  print(undefined, x);
})();

print(undefined, (function f() {
  with ({}) {
    
    

    
    
    
    
    return eval("var f; f;");
  }
})());
