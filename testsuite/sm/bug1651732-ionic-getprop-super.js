class Base {
  static a = 0;
  static [Symbol.iterator] = 0;
}

class Derived extends Base {
  static m(key) {
    
    return super[key];
  }
}

var key = {
  value: "a",

  [Symbol.toPrimitive]() {
    return this.value;
  }
};

for (var i = 0; i < 100; ++i) {
  
  if (i > 80) {
    key.value = Symbol.iterator;
  }

  assertEq(Derived.m(key), 0);
}
