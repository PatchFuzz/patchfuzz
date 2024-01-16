function mapped() {
    var Iterator = {};

    
    arguments[Symbol.iterator] = Iterator;

    
    Object.defineProperty(arguments, Symbol.iterator, {
        writable: false
    });

    
    assertEq(arguments[Symbol.iterator], Iterator);
}
mapped();

function unmapped() {
  "use strict";

  var Iterator = {};

  
  arguments[Symbol.iterator] = Iterator;

  
  Object.defineProperty(arguments, Symbol.iterator, {
      writable: false
  });

  
  assertEq(arguments[Symbol.iterator], Iterator);
}
unmapped();
