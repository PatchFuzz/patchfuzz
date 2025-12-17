function f_store(test, test2, a, i) {
  var o = [0.5,1,,3];
  var d;
  if (test) {
    d = 1.5;
  } else {
    d = o[i];
  }
  if (test2) {
    d += 1;
  }
  a[i] = d;
  return d;
}

var a1 = [0, 0, 0, {}];
%PrepareFunctionForOptimization(f_store);
f_store(true, false, a1, 0);
f_store(true, true, a1, 0);
f_store(false, false, a1, 1);
f_store(false, true, a1, 1);
%OptimizeFunctionOnNextCall(f_store);
f_store(false, false, a1, 2);
print(undefined, a1[2]);

function test_arg(expected) {
  return function(v) {
    print(expected, v);
  }
}

function f_call(f, test, test2, i) {
  var o = [0.5,1,,3];
  var d;
  if (test) {
    d = 1.5;
  } else {
    d = o[i];
  }
  if (test2) {
    d += 1;
  }
  f(d);
  return d;
}

%PrepareFunctionForOptimization(f_call);
f_call(test_arg(1.5), true, false, 0);
f_call(test_arg(2.5), true, true, 0);
f_call(test_arg(1), false, false, 1);
f_call(test_arg(2), false, true, 1);
%OptimizeFunctionOnNextCall(f_call);
f_call(test_arg(undefined), false, false, 2);


function f_external(test, test2, test3, a, i) {
  var o = [0.5,1,,3];
  var d;
  if (test) {
    d = 1.5;
  } else {
    d = o[i];
  }
  if (test2) {
    d += 1;
  }
  if (test3) {
    d = d|0;
  }
  a[d] = 1;
  print(1, a[d]);
  return d;
}

var a2 = new Int32Array(10);
%PrepareFunctionForOptimization(f_external);
f_external(true, false, true, a2, 0);
f_external(true, true, true, a2, 0);
f_external(false, false, true, a2, 1);
f_external(false, true, true, a2, 1);
%OptimizeFunctionOnNextCall(f_external);
f_external(false, false, false, a2, 2);
print(1, a2[undefined]);
