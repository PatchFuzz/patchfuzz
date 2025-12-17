var key = {
  value: "a",

  [Symbol.toPrimitive]() {
    return this.value;
  }
};

var target = {
  a: 0,
  [Symbol.iterator]: 0,
};
var obj = new Proxy(target, {});

for (var i = 0; i < 100; ++i) {
  
  if (i > 80) {
    key.value = Symbol.iterator;
  }

  
  print(key in obj, true);
}
