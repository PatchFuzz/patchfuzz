print(Math.hypot(3, 4), 5);
print(Math.hypot(1, 2, 3, 4, 5, 27), 28);


print(Math.hypot(Infinity, NaN), Infinity);
print(Math.hypot(NaN, 0), NaN);
print(Math.hypot(NaN, Infinity), Infinity);
print(Math.hypot(0, NaN), NaN);
print(Math.hypot(NaN, 1, 2, 3, 4, 5, 0), NaN);
print(Math.hypot(NaN, Infinity, 2, 3, 4, 5, 0), Infinity);


function two_hypot(a, b) {
  return Math.hypot(a, b);
}

function six_hypot(a, b, c, d, e, f) {
  return Math.hypot(a, b, c, d, e, f);
}

%PrepareFunctionForOptimization(two_hypot);
two_hypot(1, 2);
two_hypot(3, 4);
two_hypot(5, 6);
%OptimizeFunctionOnNextCall(two_hypot);
print(two_hypot(3, 4), 5);


print(two_hypot(Infinity, NaN), Infinity);
print(two_hypot(NaN, 0), NaN);
print(two_hypot(NaN, Infinity), Infinity);
print(two_hypot(0, NaN), NaN);


%PrepareFunctionForOptimization(six_hypot);
six_hypot(1, 2, 3, 4, 5, 6);
six_hypot(3, 4, 5, 6, 7, 8);
six_hypot(5, 6, 7, 8, 9, 10);
%OptimizeFunctionOnNextCall(six_hypot);
print(six_hypot(1, 2, 3, 4, 5, 27), 28);

print(six_hypot(0, 0, 0, 0, 0, 0), 0);
print(six_hypot(NaN, 1, 2, 3, 4, 5, 0), NaN);
print(six_hypot(NaN, Infinity, 2, 3, 4, 5, 0), Infinity);
print(six_hypot(1, 2, 3, 4, 5, NaN), NaN);
print(six_hypot(Infinity, 2, 3, 4, 5, NaN), Infinity);
