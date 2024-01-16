



__proto__ = {x:1};
try {
  foo();
} catch (e) {}
function foo() {
  'use strict';
  x = 42;
}
x = 42;
foo();
