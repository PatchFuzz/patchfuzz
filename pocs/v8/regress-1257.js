function g(y) { print(y, 12); }

var X = 0;

function foo () {
  var cnt = 0;
  var l = -1;
  var x = 0;
  while (1) switch (l) {
      case -1:
        var y = x + 12;
        l = 0;
        break;
      case 0:
        if (cnt++ == 5) {
          %OptimizeOsr();
          l = 1;
        }
        break;
      case 1:
        
        
        g(y);
        return;
    };
}

%PrepareFunctionForOptimization(foo);
foo();
