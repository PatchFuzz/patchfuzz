function foo(o, k) { return o[k]; }

var a = [1,2];
a["-1"] = 42;

print(1, foo(a, 0));
print(2, foo(a, 1));
print(undefined, foo(a, 3));
print(42, foo(a, -1));
