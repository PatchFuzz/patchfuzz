function f() {
    x = arguments;
    delete x[1];
}
f(0, 1);
gc();
print(x.length, 2);
print(0 in x, true);
print(1 in x, false);
