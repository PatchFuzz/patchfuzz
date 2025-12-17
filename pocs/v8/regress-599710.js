var f1 = function() {
  while (1) {
  }
};

function g1() {
  var s = "hey";
  f1 = function() {
    return true;
  };
  if (f1()) {
    return s;
  }
};
%PrepareFunctionForOptimization(g1);
%OptimizeFunctionOnNextCall(g1);
print("hey", g1());

var f2 = function() {
  do {
  } while (1);
};

function g2() {
  var s = "hey";
  f2 = function() {
    return true;
  };
  if (f2()) {
    return s;
  }
};
%PrepareFunctionForOptimization(g2);
%OptimizeFunctionOnNextCall(g2);
print("hey", g2());

var f3 = function() {
  for (;;)
    ;
};

function g3() {
  var s = "hey";
  f3 = function() {
    return true;
  };
  if (f3()) {
    return s;
  }
};
%PrepareFunctionForOptimization(g3);
%OptimizeFunctionOnNextCall(g3);
print("hey", g3());

var f4 = function() {
  for (;;)
    ;
};

function g4() {
  var s = "hey";
  f4 = function() {
    return true;
  };
  while (f4()) {
    return s;
  }
};
%PrepareFunctionForOptimization(g4);
%OptimizeFunctionOnNextCall(g4);
print("hey", g4());
