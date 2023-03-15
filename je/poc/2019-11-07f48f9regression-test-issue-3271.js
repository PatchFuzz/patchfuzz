













function bar(a) {
  print(a[0] === 10);
  a.hasOwnProperty(0);
  print(a[0] === 10);
}

function foo(a) {
  print(a === 20);
  a = 10;
  bar(arguments);
}

function barStrict(a) {
  "use strict"
  print(a[0] === 20);
  a.hasOwnProperty(0);
  print(a[0] === 20);
}

function fooStrict(a) {
  "use strict"
  print(a === 20);
  a = 10;
  barStrict(arguments);
}

foo(20);
fooStrict(20);
