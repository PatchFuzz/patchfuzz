let ToLength = getSelfHostedValue('ToLength');

print(ToLength(NaN), 0);
print(ToLength(-0), 0);
print(ToLength(0), 0);
print(ToLength(-Infinity), 0);
print(ToLength(-Math.pow(2, 31)), 0);

const MAX = Math.pow(2, 53) - 1;
print(ToLength(Infinity), MAX);
print(ToLength(MAX + 1), MAX);
print(ToLength(3), 3);
print(ToLength(40.5), 40);
