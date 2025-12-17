var x = -false;
var y = -0;
print(-x === x, true);
print(-x === y, true);
print(-y !== y, false);

print(-x == x, true);
print(-x == y, true);
print(-y != y, false);
