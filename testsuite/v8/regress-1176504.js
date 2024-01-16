





function foo() {
  'use strict';
  x = 42;
}

__proto__ = {x: 1};

assertThrows(foo);
assertThrows(foo);
