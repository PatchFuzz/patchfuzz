





function GetFunction() {
  var source = "return ((dividend | 0) / ((";
  for (var i = 0; i < 0x8000; i++) {
    source += "a,"
  }
  source += "a) | 0)) | 0";
  return Function("dividend", source);
}

var func = GetFunction();
%PrepareFunctionForOptimization(func);
print("func();");
%OptimizeFunctionOnNextCall(func);
print("func()");
