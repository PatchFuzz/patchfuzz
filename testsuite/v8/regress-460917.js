





function boom(a1, a2) {
  
  var s = a2[0];
  
  var t = a1[0];
  
  
  a2[0] = 0.3;
}


;
%PrepareFunctionForOptimization(boom);
var fast_elem = new Array(1);
fast_elem[0] = 'tagged';
boom(fast_elem, [1]);


var double_elem = new Array(1);
double_elem[0] = 0.1;
boom(double_elem, double_elem);


double_elem = new Array(10);
double_elem[0] = 0.1;

%OptimizeFunctionOnNextCall(boom);
boom(double_elem, double_elem);

assertEquals(0.3, double_elem[0]);
assertEquals(undefined, double_elem[1]);
