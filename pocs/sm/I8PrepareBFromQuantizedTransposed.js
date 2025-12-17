const COMMON_TEST_SETUP_SCRIPT = "./CommonTestSetup.js"


const ALL_TESTS_AS_STRING =`
let {int8_prepare_b_from_quantized_transposed} = instance.exports;

const VALID = {input: 0, rows: ROWS_B_MULTIPLIER, cols: COLUMNS_B_MULTIPLIER, output: ARRAY_ALIGNMENT << 5};

function testInvalidSize() {
  let invalidSize;

  
  invalidSize = 0;
  print(() => int8_prepare_b_from_quantized_transposed(VALID.input, invalidSize, VALID.cols, VALID.output), WebAssembly.RuntimeError, /unreachable/);

  
  invalidSize = ROWS_B_MULTIPLIER + 1;
  print(() => int8_prepare_b_from_quantized_transposed(VALID.input, invalidSize, VALID.cols, VALID.output), WebAssembly.RuntimeError, /unreachable/);

  
  invalidSize = 0;
  print(() => int8_prepare_b_from_quantized_transposed(VALID.input, VALID.rows, invalidSize, VALID.output), WebAssembly.RuntimeError, /unreachable/);

  
  invalidSize = COLUMNS_B_MULTIPLIER + 1;
  print(() => int8_prepare_b_from_quantized_transposed(VALID.input, VALID.rows, invalidSize, VALID.output), WebAssembly.RuntimeError, /unreachable/);
}

function testInvalidAlignment() {
  let invalidAlignment = ARRAY_ALIGNMENT + 1;

  
  print(() => int8_prepare_b_from_quantized_transposed(invalidAlignment, VALID.rows, VALID.cols, VALID.output), WebAssembly.RuntimeError, /index out of bounds/);

  
  print(() => int8_prepare_b_from_quantized_transposed(VALID.input, VALID.rows, VALID.cols, invalidAlignment), WebAssembly.RuntimeError, /index out of bounds/);
}

function testOutOfBounds() {
  let outOfBound = PageSizeInBytes - ARRAY_ALIGNMENT;

  
  print(() => int8_prepare_b_from_quantized_transposed(outOfBound, VALID.rows, VALID.cols, VALID.output), WebAssembly.RuntimeError, /index out of bounds/);

  
  print(() => int8_prepare_b_from_quantized_transposed(VALID.input, VALID.rows, VALID.cols, outOfBound), WebAssembly.RuntimeError, /index out of bounds/);
}

function testSuccessfulCall() {
  
  int8_prepare_b_from_quantized_transposed(VALID.input, VALID.rows, VALID.cols, VALID.output);
}

testInvalidSize();
testInvalidAlignment();
testOutOfBounds();
testSuccessfulCall();
`


import(COMMON_TEST_SETUP_SCRIPT).then((importedModule) => {
  importedModule.runTest(importedModule.COMMON_TEST_SETUP_AS_STRING + ALL_TESTS_AS_STRING);
});
