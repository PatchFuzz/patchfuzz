






assertEquals(Math.hypot(3, 4), 5);
assertEquals(Math.hypot(1, 2, 3, 4, 5, 27), 28);


assertEquals(Math.hypot(Infinity, NaN), Infinity);
assertEquals(Math.hypot(NaN, 0), NaN);
assertEquals(Math.hypot(NaN, Infinity), Infinity);
assertEquals(Math.hypot(0, NaN), NaN);
assertEquals(Math.hypot(NaN, 1, 2, 3, 4, 5, 0), NaN);
assertEquals(Math.hypot(NaN, Infinity, 2, 3, 4, 5, 0), Infinity);


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
assertEquals(two_hypot(3, 4), 5);


assertEquals(two_hypot(Infinity, NaN), Infinity);
assertEquals(two_hypot(NaN, 0), NaN);
assertEquals(two_hypot(NaN, Infinity), Infinity);
assertEquals(two_hypot(0, NaN), NaN);


%PrepareFunctionForOptimization(six_hypot);
six_hypot(1, 2, 3, 4, 5, 6);
six_hypot(3, 4, 5, 6, 7, 8);
six_hypot(5, 6, 7, 8, 9, 10);
%OptimizeFunctionOnNextCall(six_hypot);
assertEquals(six_hypot(1, 2, 3, 4, 5, 27), 28);

assertEquals(six_hypot(0, 0, 0, 0, 0, 0), 0);
assertEquals(six_hypot(NaN, 1, 2, 3, 4, 5, 0), NaN);
assertEquals(six_hypot(NaN, Infinity, 2, 3, 4, 5, 0), Infinity);
assertEquals(six_hypot(1, 2, 3, 4, 5, NaN), NaN);
assertEquals(six_hypot(Infinity, 2, 3, 4, 5, NaN), Infinity);
