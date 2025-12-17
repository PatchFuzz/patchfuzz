x = [8589934592, -0];
y = [0, 0];
for (let i = 0; i < 2; ++i) {
    y[i] = Math.trunc(Math.tan(x[i]));
}
print(Object.is(y[0], 1), true);
print(Object.is(y[1], -0), true);
