




























var t = 0;
function burn() {
  i = [t, 1];
  var M = [i[0], Math.cos(t) + i[7074959]];
  t += .05;
};
%PrepareFunctionForOptimization(burn);
for (var j = 0; j < 5; j++) {
  if (j == 2) %OptimizeFunctionOnNextCall(burn);
  burn();
}
