





var big = 1e10;
var backup = new Float64Array(1);

function mult0(val) {
  var prod = val * big;
  backup[0] = prod;
  var rounded = Math.round(prod);
  assertEquals(prod, backup[0]);
  return rounded;
};
%PrepareFunctionForOptimization(mult0);
var count = 5;
for (var i = 0; i < count; i++) {
  if (i == count - 1) %OptimizeFunctionOnNextCall(mult0);
  var result = mult0(-1);
  assertEquals(result, -big);
}
