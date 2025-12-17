const n = 10;
const a = [undefined];

function foo() {
  return a[0];
}

%PrepareFunctionForOptimization(foo);
%PrepareFunctionForOptimization(test);

function test() {
    var c  = 0;
    for (var i = 0; i < n; i++) {
      if(undefined == foo()) c++;
      if(i == 2) %OptimizeOsr();
    }
    return c;
}

print(n, test());
print(n, test());
