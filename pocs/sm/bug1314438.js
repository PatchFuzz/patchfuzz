function g(x) {
    return (-1 % x && Math.cos(8) >>> 0);
}
g(2);
print(Object.is(g(-1), -0), true);
