function foo() {
  'use strict';
  x = 42;
}

__proto__ = {x: 1};

print(foo);
print(foo);
