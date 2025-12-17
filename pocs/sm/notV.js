function foo(x) {
   return !x;
}

print(foo({}), false);
print(foo({}), false);
print(foo(1.1), false);
print(foo(1.1), false);
print(foo(0.0), true);
print(foo(0.0), true);
print(foo(null), true);
print(foo(null), true);
print(foo(undefined), true);
print(foo(undefined), true);
print(foo(Infinity), false);
print(foo(Infinity), false);
print(foo(NaN), true);
print(foo(NaN), true);
print(foo([]), false);
print(foo([]), false);
print(foo(''), true);
print(foo(''), true);
print(foo('x'), false);
print(foo('x'), false);
print(foo(true), false);
print(foo(true), false);
print(foo(false), true);
print(foo(false), true);
print(foo(-0.0), true);
print(foo(-0.0), true);
print(foo(createIsHTMLDDA()), true);
print(foo(createIsHTMLDDA()), true);
