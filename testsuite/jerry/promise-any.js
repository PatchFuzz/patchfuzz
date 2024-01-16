

function createIterable(arr, methods = {}) {
  let iterable = function *() {
    let idx = 0;
    while (idx < arr.length) {
      yield arr[idx];
      idx++;
    }
  }();

  iterable['return'] = methods['return'];
  iterable['throw'] = methods['throw'];
  return iterable;
};


Promise.any({
  [Symbol.iterator]() { return {get next() { throw 5; }}}
}).then(onfullfilled => {
  
  assert(false);
}).catch(err => {
  assert(err === 5);
});


Promise.any({
  [Symbol.iterator] () { return { next () { return { get value () { throw 5 }}}}}
}).then(onfullfilled => {
  
  assert(false);
}).catch(err => {
  assert(err === 5);
});


Promise.any({
  [Symbol.iterator] () { return { next () { return { get done () { throw 5 }}}}}
}).then(onfullfilled => {
  
  assert(false);
}).catch(err => {
  assert(err === 5);
});


Promise.any({
  get [Symbol.iterator] () { throw 5 }
}).then(onfullfilled => {
  
  assert(false);
}).catch(err => {
  assert(err === 5);
});

var fulfills = Promise.any(createIterable([
  new Promise(resolve => { resolve("foo"); }),
  new Promise(resolve => { resolve("bar"); }),
]));
var rejects = Promise.any(createIterable([
  new Promise((_, reject) => { reject("baz"); }),
  new Promise((_, reject) => { reject("qux"); }),
]));

fulfills.then(result => { assert (result + "" === "foo"); });
rejects.catch(result => { assert (result == "AggregateError"); });

var closed = true;
delete Promise.resolve;
Promise.any(createIterable([1,2,3], {'return': function () { closed = false; }}));
assert (!closed);

var arr = [];
Object.defineProperty(arr, Symbol.species, { get: function () { assert(false) }});
Promise.any(arr);

Promise.resolve = function () {
  return { then(resolve,reject) {
    assert(resolve !== reject)
  }};
}

Promise.any([1,2])
