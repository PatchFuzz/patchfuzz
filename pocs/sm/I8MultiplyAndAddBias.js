const COMMON_TEST_SETUP_SCRIPT = "./CommonTestSetup.js"


const ALL_TESTS_AS_STRING =`
let {int8_multiply_and_add_bias} = instance.exports;

const VALID = {inputA: 0, scaleA: 1.0, zeroPointA: 0.0, inputB: ARRAY_ALIGNMENT << 2, scaleB: 1.0, zeroPointB: 0.0, inputBiasPrepared: ARRAY_ALIGNMENT << 4, unquantMultiplier: -2.0, rowsA: ROWS_A_MULTIPLIER, width: ROWS_B_MULTIPLIER, colsB: COLUMNS_B_MULTIPLIER, output: ARRAY_ALIGNMENT << 5};

function testInvalidSize() {
  let invalidSize;

  
  invalidSize = 0;
  print(() => int8_multiply_and_add_bias(VALID.inputA, VALID.scaleA, VALID.zeroPointA, VALID.inputB, VALID.scaleB, VALID.zeroPointB, VALID.inputBiasPrepared, VALID.unquantMultiplier, invalidSize, VALID.width, VALID.colsB, VALID.output), WebAssembly.RuntimeError, /unreachable/);

  
  invalidSize = 0;
  print(() => int8_multiply_and_add_bias(VALID.inputA, VALID.scaleA, VALID.zeroPointA, VALID.inputB, VALID.scaleB, VALID.zeroPointB, VALID.inputBiasPrepared, VALID.unquantMultiplier, VALID.rowsA, invalidSize, VALID.colsB, VALID.output), WebAssembly.RuntimeError, /unreachable/);

  
  invalidSize = ROWS_B_MULTIPLIER + 1;
  print(() => int8_multiply_and_add_bias(VALID.inputA, VALID.scaleA, VALID.zeroPointA, VALID.inputB, VALID.scaleB, VALID.zeroPointB, VALID.inputBiasPrepared, VALID.unquantMultiplier, VALID.rowsA, invalidSize, VALID.colsB, VALID.output), WebAssembly.RuntimeError, /unreachable/);

  
  invalidSize = 0;
  print(() => int8_multiply_and_add_bias(VALID.inputA, VALID.scaleA, VALID.zeroPointA, VALID.inputB, VALID.scaleB, VALID.zeroPointB, VALID.inputBiasPrepared, VALID.unquantMultiplier, VALID.rowsA, VALID.width, invalidSize, VALID.output), WebAssembly.RuntimeError, /unreachable/);

  
  invalidSize = COLUMNS_B_MULTIPLIER + 1;
  print(() => int8_multiply_and_add_bias(VALID.inputA, VALID.scaleA, VALID.zeroPointA, VALID.inputB, VALID.scaleB, VALID.zeroPointB, VALID.inputBiasPrepared, VALID.unquantMultiplier, VALID.rowsA, VALID.width, invalidSize, VALID.output), WebAssembly.RuntimeError, /unreachable/);
}

function testInvalidAlignment() {
  let invalidAlignment = ARRAY_ALIGNMENT + 1;

  
  print(() => int8_multiply_and_add_bias(invalidAlignment, VALID.scaleA, VALID.zeroPointA, VALID.inputB, VALID.scaleB, VALID.zeroPointB, VALID.inputBiasPrepared, VALID.unquantMultiplier, VALID.rowsA, VALID.width, VALID.colsB, VALID.output), WebAssembly.RuntimeError, /index out of bounds/);

  
  print(() => int8_multiply_and_add_bias(VALID.inputA, VALID.scaleA, VALID.zeroPointA, invalidAlignment, VALID.scaleB, VALID.zeroPointB, VALID.inputBiasPrepared, VALID.unquantMultiplier, VALID.rowsA, VALID.width, VALID.colsB, VALID.output), WebAssembly.RuntimeError, /index out of bounds/);
}

function testOutOfBounds() {
  let outOfBound;

  
  outOfBound = PageSizeInBytes - ARRAY_ALIGNMENT;
  let rowsAForOutOfBound = ROWS_A_MULTIPLIER << 1;
  print(() => int8_multiply_and_add_bias(outOfBound, VALID.scaleA, VALID.zeroPointA, VALID.inputB, VALID.scaleB, VALID.zeroPointB, VALID.inputBiasPrepared, VALID.unquantMultiplier, rowsAForOutOfBound, VALID.width, VALID.colsB, VALID.output), WebAssembly.RuntimeError, /index out of bounds/);

  
  outOfBound = PageSizeInBytes - ARRAY_ALIGNMENT;
  print(() => int8_multiply_and_add_bias(VALID.inputA, VALID.scaleA, VALID.zeroPointA, outOfBound, VALID.scaleB, VALID.zeroPointB, VALID.inputBiasPrepared, VALID.unquantMultiplier, VALID.rowsA, VALID.width, VALID.colsB, VALID.output), WebAssembly.RuntimeError, /index out of bounds/);

  
  outOfBound = PageSizeInBytes - VALID.colsB;
  print(() => int8_multiply_and_add_bias(outOfBound, VALID.scaleA, VALID.zeroPointA, VALID.inputB, VALID.scaleB, VALID.zeroPointB, outOfBound, VALID.unquantMultiplier, VALID.rowsA, VALID.width, VALID.colsB, VALID.output), WebAssembly.RuntimeError, /index out of bounds/);

  
  outOfBound = PageSizeInBytes - VALID.colsB;
  print(() => int8_multiply_and_add_bias(VALID.inputA, VALID.scaleA, VALID.zeroPointA, VALID.inputB, VALID.scaleB, VALID.zeroPointB, VALID.inputBiasPrepared, VALID.unquantMultiplier, VALID.rowsA, VALID.width, VALID.colsB, outOfBound), WebAssembly.RuntimeError, /index out of bounds/);
}

function testSuccessfulCall() {
  
  int8_multiply_and_add_bias(VALID.inputA, VALID.scaleA, VALID.zeroPointA, VALID.inputB, VALID.scaleB, VALID.zeroPointB, VALID.inputBiasPrepared, VALID.unquantMultiplier, VALID.rowsA, VALID.width, VALID.colsB, VALID.output);
}

testInvalidSize();
testInvalidAlignment();
testOutOfBounds();
testSuccessfulCall();
`


import(COMMON_TEST_SETUP_SCRIPT).then((importedModule) => {
  importedModule.runTest(importedModule.COMMON_TEST_SETUP_AS_STRING + ALL_TESTS_AS_STRING);
});
