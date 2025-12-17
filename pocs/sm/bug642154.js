print(Math.pow(1, undefined), NaN);
print(Math.pow(1, null), 1);
print(Math.pow(1, true), 1);
print(Math.pow(1, false), 1);
print(Math.pow(1, 0), 1);
print(Math.pow(1, -0), 1);
print(Math.pow(1, NaN), NaN);
print(Math.pow(1, {}), NaN);
print(Math.pow(1, {valueOf: function() { return undefined; }}), NaN);

x = 2.2;
print(Math.pow(x - 1.2, undefined), NaN);

var y;
print(Math.pow(1, y), NaN);

