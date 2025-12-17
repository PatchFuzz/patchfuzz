function main() {
  const v2 = Object.prototype;
  v2[4294967296] = {};
  const v12 = {get: function() {}};
  Object.defineProperty(v2, 4294967296, v12);
  const v15 = {...v2};
}
%PrepareFunctionForOptimization(main);
main();
