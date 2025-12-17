let just_under = 2n ** 30n - 1n;
let just_above = 2n ** 30n;

print(() => { var dummy = 2n ** just_under; });
print(() => { var dummy = 2n ** just_above; });
