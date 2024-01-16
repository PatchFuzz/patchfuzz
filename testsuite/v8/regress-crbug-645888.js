





function f() {
  for (var i = 0; i < 3; ++i) {
    if (i == 1) {
      %OptimizeOsr();
      break;  
    }
  }
  while (true) {
    throw "no loop, thank you";
  }
}
%PrepareFunctionForOptimization(f);
assertThrows(f);
