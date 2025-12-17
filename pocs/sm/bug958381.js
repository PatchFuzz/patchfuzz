function f(x) {
    return (x != x) != Math.fround(x)
}
print(f(0), f(0));
