
var key = {
  value: "a",

  [Symbol.toPrimitive]() {
    return this.value;
  }
};

var target = {};
var obj = new Proxy(target, {});

for (var i = 0; i < 100; ++i) {
  
  if (i > 80) {
    key.value = Symbol.iterator;
  }

  obj[key] = i;

  
  assertEq(target[key.value], i);
}
