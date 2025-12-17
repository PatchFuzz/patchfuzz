const COMMON_TEST_SETUP_SCRIPT = "./CommonTestSetup.js"


const ALL_TESTS_AS_STRING =`
let {int8_prepare_bias} = instance.exports;

const VALID = {input: 0, scaleA: 1.0, zeroPointA: 0.0, scaleB: 1.0, zeroPointB: 0.0, rows: ROWS_B_MULTIPLIER, cols: COLUMNS_B_MULTIPLIER, inputBias: ARRAY_ALIGNMENT << 4, output: ARRAY_ALIGNMENT << 5};

function testInvalidSize() {
  let invalidSize;

  
  invalidSize = 0;
  print(() => int8_prepare_bias(VALID.input, VALID.scaleA, VALID.zeroPointA, VALID.scaleB, VALID.zeroPointB, invalidSize, VALID.cols, VALID.inputBias, VALID.output), WebAssembly.RuntimeError, /unreachable/);

  
  invalidSize = ROWS_B_MULTIPLIER + 1;
  print(() => int8_prepare_bias(VALID.input, VALID.scaleA, VALID.zeroPointA, VALID.scaleB, VALID.zeroPointB, invalidSize, VALID.cols, VALID.inputBias, VALID.output), WebAssembly.RuntimeError, /unreachable/);

  
  invalidSize = 0;
  print(() => int8_prepare_bias(VALID.input, VALID.scaleA, VALID.zeroPointA, VALID.scaleB, VALID.zeroPointB, VALID.rows, invalidSize, VALID.inputBias, VALID.output), WebAssembly.RuntimeError, /unreachable/);

  
  invalidSize = COLUMNS_B_MULTIPLIER + 1;
  print(() => int8_prepare_bias(VALID.input, VALID.scaleA, VALID.zeroPointA, VALID.scaleB, VALID.zeroPointB, VALID.rows, invalidSize, VALID.inputBias, VALID.output), WebAssembly.RuntimeError, /unreachable/);
}

function testInvalidAlignment() {
  let invalidAlignment = ARRAY_ALIGNMENT + 1;

  
  print(() => int8_prepare_bias(invalidAlignment, VALID.scaleA, VALID.zeroPointA, VALID.scaleB, VALID.zeroPointB, VALID.rows, VALID.cols, VALID.inputBias, VALID.output), WebAssembly.RuntimeError, /index out of bounds/);
}

function testOutOfBounds() {
  let outOfBound;

  
  outOfBound = PageSizeInBytes - ARRAY_ALIGNMENT;
  print(() => int8_prepare_bias(outOfBound, VALID.scaleA, VALID.zeroPointA, VALID.scaleB, VALID.zeroPointB, VALID.rows, VALID.cols, VALID.inputBias, VALID.output), WebAssembly.RuntimeError, /index out of bounds/);

  
  outOfBound = PageSizeInBytes - VALID.cols;
  print(() => int8_prepare_bias(VALID.input, VALID.scaleA, VALID.zeroPointA, VALID.scaleB, VALID.zeroPointB, VALID.rows, VALID.cols, outOfBound, VALID.output), WebAssembly.RuntimeError, /index out of bounds/);

  
  outOfBound = PageSizeInBytes - VALID.cols;
  print(() => int8_prepare_bias(VALID.input, VALID.scaleA, VALID.zeroPointA, VALID.scaleB, VALID.zeroPointB, VALID.rows, VALID.cols, VALID.inputBias, outOfBound), WebAssembly.RuntimeError, /index out of bounds/);
}

function testSuccessfulCall() {
  
  int8_prepare_bias(VALID.input, VALID.scaleA, VALID.zeroPointA, VALID.scaleB, VALID.zeroPointB, VALID.rows, VALID.cols, VALID.inputBias, VALID.output);
}

testInvalidSize();
testInvalidAlignment();
testOutOfBounds();
testSuccessfulCall();
`


import(COMMON_TEST_SETUP_SCRIPT).then((importedModule) => {
  importedModule.runTest(importedModule.COMMON_TEST_SETUP_AS_STRING + ALL_TESTS_AS_STRING);
});
