





var caught = 0;

function runManyTimes(f) {
  for (let i = 0; i < 1000; ++i) {
    try {
      
      f();
    } catch (e) {
      print();
    }
  }
}

let A = {
  get foo() {
    return 0;
  }
};

let B = {
  __proto__: A,

  aa() {
    "use strict";
    super.foo;
  }
};

var superAccessingFunc = B.aa;

runManyTimes(function () {
  try {
    superAccessingFunc();
  } catch (e) {
    caught++;
  }
});

print(0, caught);
