




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
  assertUnreachable();
} catch (ex) {
  assertInstanceof(ex, ReferenceError);
  
  
  print(ex.stack);
}


(function () {
  ((...args) => args)();
})();
