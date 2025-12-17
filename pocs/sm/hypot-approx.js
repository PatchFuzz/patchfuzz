;

for (var i = -20; i < 20; i++) {
    print(Math.hypot(+0, i), Math.abs(i));
    print(Math.hypot(-0, i), Math.abs(i));
}





print(Math.hypot(1e-300, 1e-300), 1.414213562373095e-300);
print(Math.hypot(1e-300, 1e-300, 1e-300), 1.732050807568877e-300);

print(Math.hypot(1e-3, 1e-3, 1e-3), 0.0017320508075688772);

print(Math.hypot(1e300, 1e300), 1.4142135623730952e+300);
print(Math.hypot(1e100, 1e200, 1e300), 1e300);

print(Math.hypot(1e3, 1e-3), 1000.0000000005);
print(Math.hypot(1e-300, 1e300), 1e300);
print(Math.hypot(1e3, 1e-3, 1e3, 1e-3), 1414.2135623738021555);

print(Math.hypot(1e1, 1e2, 1e3), Math.sqrt(1e2 + 1e4 + 1e6));
print(Math.hypot(1e1, 1e2, 1e3, 1e4), Math.sqrt(1e2 + 1e4 + 1e6 + 1e8));

for (var i = 1, j = 2; i < 2; i += 0.05, j += 0.05)
    print(Math.hypot(i, j), Math.sqrt(i * i + j * j));

for (var i = 1, j = 2, k = 3; i < 2; i += 0.05, j += 0.05, k += 0.05)
    print(Math.hypot(i, j, k), Math.sqrt(i * i + j * j + k * k));

for (var i = 1, j = 2, k = 3, l = 4; i < 2; i += 0.05, j += 0.05, k += 0.05, l += 0.5)
    print(Math.hypot(i, j, k, l), Math.sqrt(i * i + j * j + k * k + l * l));
