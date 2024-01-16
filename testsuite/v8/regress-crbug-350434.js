





function Ctor() {
  this.foo = 1;
}

var o = new Ctor();
var p = new Ctor();


function crash(o, timeout) {
  var s = '4000111222';  
  %SetAllocationTimeout(100000, timeout);
  
  var end = s >>> 0;
  s = s.substring(0, end);
  
  
  o.bar = 2;
};
%PrepareFunctionForOptimization(crash);
crash(o, 100000);
crash(o, 100000);
crash(p, 100000);
%OptimizeFunctionOnNextCall(crash);
crash(o, 100000);
o = null;
p = null;
crash({}, 0);
