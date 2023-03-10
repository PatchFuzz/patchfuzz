





function CompareNegate(a,b) {
 a = a|0;
 b = b|0;
 var sub = 0 - b;
 return a < (sub|0);
}

%PrepareFunctionForOptimization(CompareNegate);
var x = CompareNegate(1,0x80000000);
%OptimizeFunctionOnNextCall(CompareNegate);
CompareNegate(1,0x80000000);
print(CompareNegate);
print(x, CompareNegate(1,0x80000000));
