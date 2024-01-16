



'use strict';

{
  const x = [42];
  x.splice(0, 0, 23);
  assertEquals([23, 42], x);
  x.length++;
  assertEquals([23, 42, ,], x);
  assertFalse(x.hasOwnProperty(2));
}

{
  const x = [4.2];
  x.splice(0, 0, 23);
  assertEquals([23, 4.2], x);
  x.length++;
  assertEquals([23, 4.2, ,], x);
  assertFalse(x.hasOwnProperty(2));
}
