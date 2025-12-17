const {
  getExtrasBindingObject,
  getContinuationPreservedEmbedderDataViaAPIForTesting
} = d8;
const {
  getContinuationPreservedEmbedderData,
  setContinuationPreservedEmbedderData,
} = getExtrasBindingObject();

function f0(v5) {
  setContinuationPreservedEmbedderData(v5);
}

function f1() {
  return getContinuationPreservedEmbedderData();
}

const v4 = v6 => {
  f0(v6);
  return getContinuationPreservedEmbedderDataViaAPIForTesting();
};

%PrepareFunctionForOptimization(f0);
%OptimizeFunctionOnNextCall(f0);

setContinuationPreservedEmbedderData(5);

const expected = v4({});

%PrepareFunctionForOptimization(f1);
%OptimizeFunctionOnNextCall(f1);

const actual = f1();
print(expected, actual);
