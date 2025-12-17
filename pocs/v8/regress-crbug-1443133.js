function r() {
  return new Promise((resolve, reject) => {
    throw new Error("boom");
  });
}

function main() {
  [].values().__proto__.return = r;
  try {
    new WeakSet([1]);
  } catch (err) {}
}

%PrepareFunctionForOptimization(r);
main();
%OptimizeFunctionOnNextCall(r);
main();
