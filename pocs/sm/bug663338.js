print(parseInt(1.0e-7, 10), 1);
print(parseInt(-1.0e-7, 10), -1);

print(parseInt(9e-8, 10), 9);
print(parseInt(-9e-8, 10), -9);

print(parseInt(1.5e-8, 10), 1);
print(parseInt(-1.5e-8, 10), -1);

print(parseInt(1.0e-6, 10), 0);

print(parseInt(0, 10), 0);
print(parseInt(-0, 10), 0);

print(parseInt('0', 10), 0);
print(parseInt('-0', 10), -0);


print(parseInt(numberToDouble(0), 10), 0);
print(parseInt(numberToDouble(-0), 10), 0);
