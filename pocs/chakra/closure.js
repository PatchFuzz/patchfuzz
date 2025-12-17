function write(v) { print(v + ""); }


function Processing() {
    var p = {};
    p.MathEval = function MathEval(str) {
          eval(str); 
    };  
    p.Fib = function Fib(n) {
                           if (n == 0) return 0;
                           if (n == 1) return 1;
                           return Fib(n-1) + Fib(n-2);  
    };
             return p;
  };

var p = Processing();
write(p.Fib(20));


(function () {
    var first = function () { },
    second = function second() {
        var x = 1;
        var y = first();
        x = second;
        z = function () { return x; };
    };
    write("second test");
})();
