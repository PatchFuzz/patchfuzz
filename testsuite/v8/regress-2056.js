




























var cases = [
  [0.0, 0.0, 0.0, 0, 0], [undefined, 0.0, NaN, NaN], [0.0, undefined, NaN, NaN],
  [NaN, 0.0, NaN, NaN], [0.0, NaN, NaN, NaN], [-NaN, 0.0, NaN, NaN],
  [0.0, -NaN, NaN, NaN], [Infinity, 0.0, Infinity, 0.0],
  [0.0, Infinity, Infinity, 0.0], [-Infinity, 0.0, 0.0, -Infinity],
  [0.0, -Infinity, 0.0, -Infinity]
];

function do_min(a, b) {
  return Math.min(a, b);
};
%PrepareFunctionForOptimization(do_min);
function do_max(a, b) {
  return Math.max(a, b);
}


;
%PrepareFunctionForOptimization(do_max);
for (i = 0; i < cases.length; ++i) {
  var c = cases[i];
  assertEquals(c[3], do_min(c[0], c[1]));
  assertEquals(c[2], do_max(c[0], c[1]));
}


for (i = 0; i < cases.length; ++i) {
  var c = cases[i];
  %OptimizeFunctionOnNextCall(do_min);
  %OptimizeFunctionOnNextCall(do_max);
  assertEquals(c[3], do_min(c[0], c[1]));
  assertEquals(c[2], do_max(c[0], c[1]));
  %PrepareFunctionForOptimization(do_min);
  %PrepareFunctionForOptimization(do_max);
}
