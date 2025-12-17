Object.defineProperty(Promise, Symbol.species, { value: 0 });
var p = new Promise(function() {});
try {
  p.then();
  print();
} catch(e) {
  print(e instanceof TypeError);
}
