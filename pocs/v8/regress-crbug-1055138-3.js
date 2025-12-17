Object.prototype[1] = 153;

(function StrictStoreToReadOnlyProperty() {
  function foo(prototype_frozen) {
    "use strict";
    let ar = [];
    let threw_exception = false;
    for (let i = 0; i < 3; i++) {
      try {
        ar[i] = 42;
      } catch(e) {
        if (prototype_frozen) {
          
          
          print(i == 1);
          print(1, ar.length);
          print(e, TypeError);
          threw_exception = true;
        }
      }
    }
    if (prototype_frozen) {
      print(threw_exception);
    }
    return ar;
  }

  
  print([42,42,42], foo(false));
  print([42,42,42], foo(false));
  print([42,42,42], foo(false));
  print([42,42,42], foo(false));
  Object.freeze(Object.prototype);
  
  print([42,153,42], foo());
})();
