function mod1() {
  var v_1 = 1;
  var v_2 = 1;
  v_1++;
  v_2 = {valueOf: function() { throw "gagh"; }};

  function bug1() {
    for (var i = 0; i < 1; v_2++) {
      if (v_1 == 1) ;
    }
  }

  return bug1;
}

var f = mod1();
%PrepareFunctionForOptimization(f);
print(f);
%OptimizeFunctionOnNextCall(f);
print(f);


var v_3 = 1;
var v_4 = 1;
v_3++;
v_4 = {valueOf: function() { throw "gagh"; }};

function bug2() {
  for (var i = 0; i < 1; v_4++) {
    if (v_3 == 1) ;
  }
}

%PrepareFunctionForOptimization(bug2);
print(bug2);
%OptimizeFunctionOnNextCall(bug2);
print(bug2);
