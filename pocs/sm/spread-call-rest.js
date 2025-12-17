;

function makeArray(...args) {
  return args;
}


function test(...args) {
  return makeArray(...args);
}
print(test(1, 2, 3), [1, 2, 3]);


function hole1(...args) {
  args[4] = 5;
  return makeArray(...args);
}
print(hole1(1, 2, 3), [1, 2, 3, undefined, 5]);

function hole2(...args) {
  args.length = 5;
  return makeArray(...args);
}
print(hole2(1, 2, 3), [1, 2, 3, undefined, undefined]);

function hole3(...args) {
  delete args[1];
  return makeArray(...args);
}
print(hole3(1, 2, 3), [1, undefined, 3]);


function modifiedIterator(...args) {
  args[Symbol.iterator] = function*() {
    for (let i = 0; i < this.length; i++)
      yield this[i] * 10;
  };
  return makeArray(...args);
}
print(modifiedIterator(1, 2, 3), [10, 20, 30]);


function modifiedProto(...args) {
  args.__proto__ = {
    __proto__: Array.prototype,
    *[Symbol.iterator]() {
      for (let i = 0; i < this.length; i++)
        yield this[i] * 10;
    }
  };
  return makeArray(...args);
}
print(modifiedProto(1, 2, 3), [10, 20, 30]);


let ArrayValues = Array.prototype[Symbol.iterator];
Array.prototype[Symbol.iterator] = function*() {
  for (let i = 0; i < this.length; i++)
    yield this[i] * 10;
};
print(test(1, 2, 3), [10, 20, 30]);
Array.prototype[Symbol.iterator] = ArrayValues;


let ArrayIteratorPrototype = Object.getPrototypeOf(Array.prototype[Symbol.iterator]());
let i = 1;
ArrayIteratorPrototype.next = function() {
  return { done: i % 4 == 0, value: 10 * i++ };
};
print(test(1, 2, 3), [10, 20, 30]);
