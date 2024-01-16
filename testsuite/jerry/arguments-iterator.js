













var arrayPrototypeValues = Array.prototype.values;

function f_mapped() {
  assert(typeof arguments[Symbol.iterator] === 'function');
  assert(arguments[Symbol.iterator] === arrayPrototypeValues);
  assert(Object.hasOwnProperty.call(arguments, Symbol.iterator));

  let sum = 0;
  for (a of arguments) {
    sum += a;
  }
  return sum;
};

function f_unmapped(b = 2) {
  assert(typeof arguments[Symbol.iterator] === 'function');
  assert(arguments[Symbol.iterator] === arrayPrototypeValues);
  assert(Object.hasOwnProperty.call(arguments, Symbol.iterator));

  let sum = 0;
  for (a of arguments) {
    sum += a;
  }
  return sum;
};

assert(f_mapped(1, 2, 3, 4, 5) === 15);
assert(f_unmapped(1, 2, 3, 4, 5) === 15);

Object.defineProperty(Array.prototype, "values", { get : function () {
  
  assert(false);
}});

assert(f_mapped(1, 2, 3, 4, 5) === 15);
assert(f_unmapped(1, 2, 3, 4, 5) === 15);
