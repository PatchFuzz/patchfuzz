(function () {
  ((d, e = d) => {
    return d * e;
  })();
})();

try {
  (function () {
    ((d, e = f, f = d) => {
      
    })();
  })();
  print();
} catch (ex) {
  print(ex, ReferenceError);
  
  
  print(ex.stack);
}


(function () {
  ((...args) => args)();
})();
