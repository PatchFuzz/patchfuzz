function foo(s) {
  return s[5];
}

%PrepareFunctionForOptimization(foo);
print("f", foo("abcdef"));
print(undefined, foo("a"));
%OptimizeFunctionOnNextCall(foo);
print("f", foo("abcdef"));
print(undefined, foo("a"));
print(foo);


String.prototype.__proto__ = new Proxy(String.prototype.__proto__, {
  get(target, property) {
    return "5";
  }
});

print(foo);
%DeoptimizeFunction(foo);
print("f", foo("abcdef"));
%PrepareFunctionForOptimization(foo);
print("5", foo("a"));
%OptimizeFunctionOnNextCall(foo);
print("f", foo("abcdef"));
print("5", foo("a"));
print(foo);
