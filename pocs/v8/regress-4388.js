function test_hole_check_for_let(a) {
  'use strict';
  { switch (a) {
      case 0: let x;
      case 1: x = 9;
    }
  }
}
%PrepareFunctionForOptimization(test_hole_check_for_let);
print("test_hole_check_for_let(0)");
print("test_hole_check_for_let(1)", ReferenceError);
%OptimizeFunctionOnNextCall(test_hole_check_for_let)
print("test_hole_check_for_let(1)", ReferenceError);



function test_hole_check_for_const(a) {
  'use strict';
  { switch (a) {
      case 0: const x = 3;
      case 1: x = 2;
    }
  }
}
%PrepareFunctionForOptimization(test_hole_check_for_const);
print("test_hole_check_for_const(0)", TypeError);
print("test_hole_check_for_const(1)", ReferenceError);
%OptimizeFunctionOnNextCall(test_hole_check_for_const)
print("test_hole_check_for_const(1)", ReferenceError);
