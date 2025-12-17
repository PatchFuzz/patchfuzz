var my_global = 0;




eval(`let foo = 1;
      let maybe_lazy = function() { foo = 2; }
      maybe_lazy();
      my_global = foo;`);
print(2, my_global);

(function TestVarInStrictEval() {
  "use strict";
  eval(`var foo = 3;
        let maybe_lazy = function() { foo = 4; }
        maybe_lazy();
        my_global = foo;`);
  print(4, my_global);
})();

eval("let foo = 1; function lazy() { foo = 2; } lazy(); my_global = foo;");
print(my_global, 2);


eval(`{ let foo = 5;
        function not_lazy() { foo = 6; }
        not_lazy();
        my_global = foo;
      }`);
print(my_global, 6);
