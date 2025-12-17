function foo(x) {
  return Symbol.iterator == x;
}
%PrepareFunctionForOptimization(foo);

function main() {
  foo(Symbol());
  foo({valueOf() { return Symbol.toPrimitive}});
}

%NeverOptimizeFunction(main);
main();
%OptimizeFunctionOnNextCall(foo);
main();
print(foo);
