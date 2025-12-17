setJitCompilerOption('baseline.warmup.trigger', 1);
let r;
(function() {
     function f() {
         return (1 + -1 / 0) << null;
     }
     print(f(), 0);
     print(f(), 0);

     function g(x,y) {
         var a = x|0;
         var b = y|0;
         return (a / b + a / b) | 0;
     }
     print(g(3,4), 1);
     print(g(3,4), 1);
})();
