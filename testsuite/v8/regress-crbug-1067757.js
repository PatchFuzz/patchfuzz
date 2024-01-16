





"use strict";

function foo() {
  let count = 0;
  try {
    for (p of v) {
      count += 1;
    }
  } catch (e) { }
  assertEquals(count, 0);
}

var v = [ "0", {}];

foo();
Reflect.deleteProperty(v, '0');

let count_loop = 0;
try {
 for (p of v) { count_loop += 1; }
} catch (e) {}
assertEquals(count_loop, 0);

foo();
