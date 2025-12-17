var p = {x:1};
__proto__ = p;
print(x, 1);
__proto__ = {x:13};
print(x, 13);
__proto__ = {x:42};
p = null;
gc();
print(x, 42);
