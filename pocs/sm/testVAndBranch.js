function f(x) {
    if (x)
        return true;
    return false;
}

print(f(NaN), false);
print(f(-0), false);
print(f(3.3), true);
print(f(0), false);
print(f(3), true);
print(f("hi"), true);
print(f(""), false);
print(f(true), true);
print(f(false), false);
print(f(undefined), false);
print(f({}), true);
print(f(null), false);

