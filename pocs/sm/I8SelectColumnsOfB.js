const COMMON_TEST_SETUP_SCRIPT = "./CommonTestSetup.js"


const ALL_TESTS_AS_STRING =`
let {int8_select_columns_of_b} = instance.exports;

const VALID = {input: 0, rows: ROWS_B_MULTIPLIER, cols: COLUMNS_B_MULTIPLIER, colIndexList: ARRAY_ALIGNMENT << 3, sizeColIndexList: SELECTED_COLUMNS_B_MULTIPLIER, output: ARRAY_ALIGNMENT << 5};

function testInvalidSize() {
  let invalidSize;

  
  invalidSize = 0;
  print(() => int8_select_columns_of_b(VALID.input, invalidSize, VALID.cols, VALID.colIndexList, VALID.sizeColIndexList, VALID.output), WebAssembly.RuntimeError, /unreachable/);

  
  invalidSize = ROWS_B_MULTIPLIER + 1;
  print(() => int8_select_columns_of_b(VALID.input, invalidSize, VALID.cols, VALID.colIndexList, VALID.sizeColIndexList, VALID.output), WebAssembly.RuntimeError, /unreachable/);

  
  invalidSize = 0;
  print(() => int8_select_columns_of_b(VALID.input, VALID.rows, invalidSize, VALID.colIndexList, VALID.sizeColIndexList, VALID.output), WebAssembly.RuntimeError, /unreachable/);

  
  invalidSize = COLUMNS_B_MULTIPLIER + 1;
  print(() => int8_select_columns_of_b(VALID.input, VALID.rows, invalidSize, VALID.colIndexList, VALID.sizeColIndexList, VALID.output), WebAssembly.RuntimeError, /unreachable/);

  
  invalidSize = 0;
  print(() => int8_select_columns_of_b(VALID.input, VALID.rows, VALID.cols, VALID.colIndexList, invalidSize, VALID.output), WebAssembly.RuntimeError, /unreachable/);

  
  invalidSize = SELECTED_COLUMNS_B_MULTIPLIER + 1;
  print(() => int8_select_columns_of_b(VALID.input, VALID.rows, VALID.cols, VALID.colIndexList, invalidSize, VALID.output), WebAssembly.RuntimeError, /unreachable/);
}

function testInvalidAlignment() {
  let invalidAlignment = ARRAY_ALIGNMENT + 1;

  
  print(() => int8_select_columns_of_b(invalidAlignment, VALID.rows, VALID.cols, VALID.colIndexList, VALID.sizeColIndexList, VALID.output), WebAssembly.RuntimeError, /index out of bounds/);
}

function testOutOfBounds() {
  let outOfBound;

  
  outOfBound = PageSizeInBytes - ARRAY_ALIGNMENT;
  print(() => int8_select_columns_of_b(outOfBound, VALID.rows, VALID.cols, VALID.colIndexList, VALID.sizeColIndexList, VALID.output), WebAssembly.RuntimeError, /index out of bounds/);

  
  outOfBound = PageSizeInBytes - VALID.sizeColIndexList;
  print(() => int8_select_columns_of_b(outOfBound, VALID.rows, VALID.cols, outOfBound, VALID.sizeColIndexList, VALID.output), WebAssembly.RuntimeError, /index out of bounds/);

  
  outOfBound = PageSizeInBytes - (VALID.rows * VALID.sizeColIndexList);
  print(() => int8_select_columns_of_b(VALID.input, VALID.rows, VALID.cols, VALID.colIndexList, VALID.sizeColIndexList, outOfBound), WebAssembly.RuntimeError, /index out of bounds/);
}

function testSuccessfulCall() {
  
  int8_select_columns_of_b(VALID.input, VALID.rows, VALID.cols, VALID.colIndexList, VALID.sizeColIndexList, VALID.output);
}

testInvalidSize();
testInvalidAlignment();
testOutOfBounds();
testSuccessfulCall();
`


import(COMMON_TEST_SETUP_SCRIPT).then((importedModule) => {
  importedModule.runTest(importedModule.COMMON_TEST_SETUP_AS_STRING + ALL_TESTS_AS_STRING);
});
