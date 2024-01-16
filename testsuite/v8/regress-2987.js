
































function constructor() {
  this.x = 0;
}

var deopt = {deopt: false};
function boogeyman(mode, value) {
  var object = new constructor();
  if (mode) {
    object.x = 1;
  } else {
    object.x = 2;
  }
  deopt.deopt;
  assertEquals(value, object.x);
};
%PrepareFunctionForOptimization(boogeyman);
boogeyman(true, 1);
boogeyman(true, 1);
boogeyman(false, 2);
boogeyman(false, 2);
%OptimizeFunctionOnNextCall(boogeyman);
boogeyman(false, 2);
delete deopt.deopt;
boogeyman(false, 2);
