const topLevel = %GetFunctionForCurrentFrame();
%PrepareFunctionForOptimization(topLevel);

for (let v0 = 0; v0 < 5; v0++) {
  %OptimizeOsr();
  for (let v2 = 0; v2 < 5; v2++) {
  }
  ("").charCodeAt(v0);
}
