



for (var i = 0; i < 2000; i++) {
  Object.prototype['X'+i] = true;
}

var m = new Map();
m.set(Object.prototype, 23);

var o = {};
m.set(o, 42);
