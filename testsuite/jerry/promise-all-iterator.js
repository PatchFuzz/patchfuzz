

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


Promise.all({[Symbol.iterator]() { return {get next() { throw 5; }}}
}).then(onfullfilled => {
  
  assert(false);
}).catch(err => {
  assert(err === 5);
});


Promise.all({ [Symbol.iterator] () { return { next () { return { get value () { throw 5 }}}}}
}).then(onfullfilled => {
  
  assert(false);
}).catch(err => {
  assert(err === 5);
});


Promise.all({ [Symbol.iterator] () { return { next () { return { get done () { throw 5 }}}}}
}).then(onfullfilled => {
  
  assert(false);
}).catch(err => {
  assert(err === 5);
});


Promise.all({ get [Symbol.iterator] () { throw 5 }
}).then(onfullfilled => {
  
  assert(false);
}).catch(err => {
  assert(err === 5);
});

var fulfills = Promise.all(createIterable([
  new Promise(resolve => { resolve("foo"); }),
  new Promise(resolve => { resolve("bar"); }),
]));
var rejects = Promise.all(createIterable([
  new Promise((_, reject) => { reject("baz"); }),
  new Promise((_, reject) => { reject("qux"); }),
]));

fulfills.then(result => { assert (result + "" === "foo,bar"); });
rejects.catch(result => { assert (result === "baz"); });

var closed = true;
delete Promise.resolve;
Promise.all(createIterable([1,2,3], {'return': function () { closed = false; }}));
assert (!closed);

var arr = [];
Object.defineProperty(arr, Symbol.species, { get: function () { assert(false) }});
Promise.all(arr);
