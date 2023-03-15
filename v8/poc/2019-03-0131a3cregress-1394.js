




























function f(x) {
  var ret = -1;
  switch(x){
    default:
    case 0:
      ret = 0;
      break;
    case 1:
      ret = 1;
      break;
    case 2:
      ret = 2;
      break;
    case 3:
      ret = 3;
      break;
    case 4:
      ret = 4;
      break;
  }
  return ret;
};

%PrepareFunctionForOptimization(f);

for (var i = 0; i < 3; i++) print(i, f(i));

%OptimizeFunctionOnNextCall(f);

print(0, f(0));
print(1, f(1));
