













function bar(a) {
  assert(a[0] === 10);
  a.hasOwnProperty(0);
  assert(a[0] === 10);
}

function foo(a) {
  assert(a === 20);
  a = 10;
  bar(arguments);
}

function barStrict(a) {
  "use strict"
  assert(a[0] === 20);
  a.hasOwnProperty(0);
  assert(a[0] === 20);
}

function fooStrict(a) {
  "use strict"
  assert(a === 20);
  a = 10;
  barStrict(arguments);
}

foo(20);
fooStrict(20);
