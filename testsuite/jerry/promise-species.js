









var test = new Promise(function(){});
var bogoCount = 0;
function bogusConstructor() { bogoCount++; }
test.constructor = bogusConstructor;
assert(Promise.resolve(test) instanceof Promise);
assert(!(Promise.resolve(test) instanceof bogusConstructor));




var count = 0;
var params;

class MyPromise extends Promise {
  constructor(...args) {
    super(...args);
    params = args;
  }
  static get [Symbol.species]() {
    count++
    return this;
  }
}

var myPromise = MyPromise.resolve().then();
assert(1 === count);
assert(1 === params.length);
assert('function' === typeof(params[0]));
assert(myPromise instanceof MyPromise);
assert(myPromise instanceof Promise);
