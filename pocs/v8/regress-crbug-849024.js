this.__proto__ = new Proxy({}, {});

function test1() {
  eval("bla");
}

print(test1, ReferenceError);
print(test1, ReferenceError);
print(test1, ReferenceError);

function test2() {
  gc();
  eval("bla");
}

print(test2, ReferenceError);
print(test2, ReferenceError);
print(test2, ReferenceError);

function foo() {
  try {
    eval("bla");
  } catch(e) {
    return;
  }
  throw 1337;
}

function test3() {
  gc();
  foo();
  foo();
}

print(test3);
print(test3);
print(test3);
