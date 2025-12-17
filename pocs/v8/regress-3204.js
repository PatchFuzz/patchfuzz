function SmiTaggingCanOverflow(x) {
  x = x | 0;
  if (x == 0) return;
  return x;
};
%PrepareFunctionForOptimization(SmiTaggingCanOverflow);
SmiTaggingCanOverflow(2147483647);
SmiTaggingCanOverflow(2147483647);
%OptimizeFunctionOnNextCall(SmiTaggingCanOverflow);
print(2147483647, SmiTaggingCanOverflow(2147483647));



function ModILeftCanBeNegative() {
  var x = 0;
  for (var i = -1; i < 0; ++i) x = i % 2;
  return x;
};
%PrepareFunctionForOptimization(ModILeftCanBeNegative);
ModILeftCanBeNegative();
%OptimizeFunctionOnNextCall(ModILeftCanBeNegative);
print(-1, ModILeftCanBeNegative());



function ModIRightCanBeZero() {
  var x = 0;
  for (var i = -1; i <= 0; ++i) x = 2 % i | 0;
  return x;
};
%PrepareFunctionForOptimization(ModIRightCanBeZero);
ModIRightCanBeZero();
%OptimizeFunctionOnNextCall(ModIRightCanBeZero);
ModIRightCanBeZero();
