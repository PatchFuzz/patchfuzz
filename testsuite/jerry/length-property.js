

var builtin_objects = [
  Array,
  ArrayBuffer,
  Boolean,
  DataView,
  Date,
  Error,
  EvalError,
  Function,
  Map,
  Number,
  Object,
  Promise,
  RangeError,
  ReferenceError,
  RegExp,
  Set,
  SharedArrayBuffer,
  String,
  Symbol,
  SyntaxError,
  TypeError,
  URIError,
  WeakMap,
  WeakSet,
];

var builtin_typedArrays = [
  Float32Array,
  Float64Array,
  Int16Array,
  Int32Array,
  Int8Array,
  Uint16Array,
  Uint32Array,
  Uint8Array,
  Uint8ClampedArray,
];


(function () {
  
  var desc;
  
  for (obj of builtin_objects) {
    desc = Object.getOwnPropertyDescriptor(obj, 'length');                                                                                                                    
    assert(desc.writable === false);
    assert(desc.enumerable === false);
    assert(desc.configurable === true);
  }
  
  for (ta of builtin_typedArrays) {
    desc = Object.getOwnPropertyDescriptor(ta, 'length');                                                                                                                    
    assert(desc.writable === false);
    assert(desc.enumerable === false);
    assert(desc.configurable === true);
  }
})();

(function () {
  
  for (obj of builtin_objects) {
    assert(obj.hasOwnProperty('length') === true);
    assert(delete obj.length);
    assert(obj.hasOwnProperty('length') === false);
  }

  for (ta of builtin_typedArrays) {
    assert(ta.hasOwnProperty('length') === true);
    assert(delete ta.length);
    assert(ta.hasOwnProperty('length') === false);
  }
})();

(function () {
  
  for (obj of builtin_objects) {
    var property_names = Object.getOwnPropertyNames(obj);
    for (var name of property_names) {
      if (typeof obj[name] == 'function') {
        var func = obj[name];
        var desc = Object.getOwnPropertyDescriptor(func, 'length');
        assert(desc.writable === false);
        assert(desc.enumerable === false);
        assert(desc.configurable === true);

        assert(func.hasOwnProperty('length') === true);
        assert(delete func.length);
        assert(func.hasOwnProperty('length') === false);
      }
    }
  }
})();

(function () {
  
  var normal_func = function () {};
  var arrow_func = () => {};
  var bound_func = normal_func.bind({});
  var nested_bound_func = arrow_func.bind().bind(1);

  var functions = [normal_func, arrow_func, bound_func, nested_bound_func];

  for (func of functions) {
    var desc = Object.getOwnPropertyDescriptor(func, 'length');
    assert(desc.writable === false);
    assert(desc.enumerable === false);
    assert(desc.configurable === true);
  }

  for (func of functions) {
    assert(func.hasOwnProperty('length') === true);
    assert(delete func.length);
    assert(func.hasOwnProperty('length') === false);
  }
})();

(function() {
  
  function f(a,b,c) {}
  Object.defineProperty(f, "length", { value: 30 });
  var g = f.bind(1,2)
  assert(g.length === 29);
})();

(function() {
  
  function f(a,b,c) {}
  var g = f.bind(1,2)
  Object.defineProperty(f, "length", { value: 30 });
  assert(g.length === 2);
})();
