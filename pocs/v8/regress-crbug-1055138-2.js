Object.prototype[1] = 153;

(function TestSloppyStoreToReadOnlyProperty() {
  function foo(prototype_frozen) {
    let ar = [];
    for (let i = 0; i < 3; i++) {
      ar[i] = 42;

      if (prototype_frozen) {
        if (i == 1) {
          
          
          print(1, ar.length);
        } else {
          print(i + 1, ar.length);
        }
      }
    }
    return ar;
  }

  
  print([42,42,42], foo(false));
  print([42,42,42], foo(false));
  print([42,42,42], foo(false));
  print([42,42,42], foo(false));
  Object.freeze(Object.prototype);
  
  print([42,153,42], foo(true));
})();
