function f(x, y) { return x || Math.fround(y); }
print(f(0, 0), 0);
print(f(0xfffffff, 0), 0xfffffff);
