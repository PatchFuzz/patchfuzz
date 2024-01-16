














v_0 = [,];
v_1 = [,];
v_2 = Object.defineProperties([,], { '0': {  get: function() { } } });


var a = { x:2 };
Object.defineProperty(a, "x", {
      enumerable: true,
      configurable: true,
      get: function() { return 0; }
});


var obj = {test: 2};

Object.defineProperty(obj, "test", {
      enumerable: true,
      configurable: true,
      get: function() { return 0; }
});

Object.defineProperty(obj, "x", {
      enumerable: true,
      configurable: true,
      value: -2
});
