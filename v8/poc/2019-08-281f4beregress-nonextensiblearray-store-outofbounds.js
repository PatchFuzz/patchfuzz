





const v3 = [0,"symbol"];
const v5 = 0 - 1;
const v6 = Object.preventExtensions(v3);
let v9 = 0;
function f1() {
  v6[119090556] = v5;
}
%PrepareFunctionForOptimization(f1);
f1();
%OptimizeFunctionOnNextCall(f1);
f1();
print(f1);
print(v6.length, 2);
