







'use strict';

switch (1) { case 1: let x = 2; }

assertThrows(function() { return x; }, ReferenceError);

{
  let result;
  let x = 1;
  switch (x) {
    case 1:
      let x = 2;
      result = x;
      break;
    default:
      result = 0;
      break;
  }
  assertEquals(1, x);
  assertEquals(2, result);
}

{
  let result;
  let x = 1;
  switch (eval('x')) {
    case 1:
      let x = 2;
      result = x;
      break;
    default:
      result = 0;
      break;
  }
  assertEquals(1, x);
  assertEquals(2, result);
}
