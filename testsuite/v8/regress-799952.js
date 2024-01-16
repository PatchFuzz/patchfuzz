



var sentinel = {};
Object.defineProperty(Promise, Symbol.species, {
  value: function(f) {
    f(function() {}, function() {})
    return sentinel;
  }
});




var promise = WebAssembly.instantiate(new ArrayBuffer());
assertInstanceof(promise, Promise);
assertNotSame(promise, sentinel);



var monkey = promise.then(r => { print(r) }, e => { print(e) });
assertSame(monkey, sentinel);
