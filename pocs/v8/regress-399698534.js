function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = String.prototype.charCodeAt.call(str, i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return hash;
}

function pr(value) {
  const hash = hashCode(value);
  hashCode(hash + "meh");
  return hash;
};

%PrepareFunctionForOptimization(hashCode);
pr(function (p) {});

%OptimizeMaglevOnNextCall(hashCode);
pr(function (p) {});

Object.prototype.length = 2;

%OptimizeFunctionOnNextCall(hashCode);
print(0, pr(0));
