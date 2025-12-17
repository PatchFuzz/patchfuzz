ignoreUnhandledRejections();


var g = newGlobal({newCompartment: true});


var x = g.Promise.resolve();


x.then = function() {
  throw new Error();
};

var iterator = {
  [Symbol.iterator]() {
    return this;
  },
  next() {
    return {value: x, done: false};
  },
};

oomTest(() => g.Promise.any(iterator));
