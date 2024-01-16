














var a = {one: "test"};
a.two = 3;
Object.freeze(a);
a.three = 7;
assert(a.three === undefined);


Object.freeze(this);
assert(eval ('function b() {};') === undefined);
assert(eval('var test_var = 3') === undefined);


function fail() {
  'use strict';
  a.one = 'test'; 
  delete a.two; 
  a.three = 'test2'; 
}

try {
  fail();
} catch (e) {
  assert(e instanceof TypeError);
}

function fail_two() {
  'use strict';
  this.a = 'test';
}

try {
  fail_two();
} catch (e) {
  assert(e instanceof TypeError);
}

assert(Object.keys(a) == "one,two");

assert(Object.keys(this) == "assert,gc,print,sourceName,createRealm,a,fail,fail_two");
