eval("var x = 10; function foo() { return x; }");

print(foo(), 10);
gc();
print(foo(), 10);
