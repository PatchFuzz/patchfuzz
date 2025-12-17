function f() { for (i = 0; i < 2000; ++i) { var k = typeof nosuchvar; } return k; }

print(f(), "undefined");
this.nosuchvar = 5;
print(f(), "number");
