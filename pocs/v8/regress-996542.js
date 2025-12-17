var zero = 0;
var one = 1;
var minus_one = -1;

print(-Infinity, 1 / (0 / -1));
print(-Infinity, one / (zero / minus_one));
print(Infinity, 1 / (0 / 1));
print(Infinity, one / (zero / one));

print(-Infinity, 1 / (-1 % 1));
print(-Infinity, one / (minus_one % one))
print(Infinity, 1 / (1 % 1));
print(Infinity, one / (one % one));
