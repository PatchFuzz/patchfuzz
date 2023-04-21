














var a = {one: "test"};
a.two = 3;
Object.freeze(a);
a.three = 7;
print(a.three === undefined);


Object.freeze(this);
print(eval ('function b() {};') === undefined);
print(eval('var test_var = 3') === undefined);


function fail() {
  'use strict';
  a.one = 'test'; 
  delete a.two; 
  a.three = 'test2'; 
}

try {
  fail();
} catch (e) {
  print(e instanceof TypeError);
}

function fail_two() {
  'use strict';
  this.a = 'test';
}

try {
  fail_two();
} catch (e) {
  print(e instanceof TypeError);
}

print(Object.keys(a) == "one,two");

print(Object.keys(this) == "assert,gc,print,sourceName,createRealm,a,fail,fail_two");
