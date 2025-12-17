function simple() {
  function f() {
    "use strict";

    var sum = 0;
    for (var v of arguments) {
      sum += v;
    }
    return sum;
  }

  for (var i = 0; i < 100; ++i) {
    print(f(1, 2, 3), 6);
  }
}
simple();

function spreadCall() {
  function f() {
    var sum = 0;
    for (var v of arguments) {
      sum += v;
    }
    return sum;
  }

  function g() {
    "use strict";
    return f(...arguments);
  }

  for (var i = 0; i < 100; ++i) {
    print(g(1, 2, 3), 6);
  }
}
spreadCall();

function spreadArray() {
  function f() {
    "use strict";

    var arr = [...arguments];
    var sum = 0;
    for (var v of arr) {
      sum += v;
    }
    return sum;
  }

  for (var i = 0; i < 100; ++i) {
    print(f(1, 2, 3), 6);
  }
}
spreadArray();

function reifyIterator() {
  var reify = false;
  function f() {
    "use strict";

    if (reify) {
      
      Object.defineProperty(arguments, Symbol.iterator, {
        writable: false
      });
    }

    var sum = 0;
    for (var v of arguments) {
      sum += v;
    }
    return sum;
  }

  for (var i = 0; i <= 100; ++i) {
    reify = i >= 50;
    print(f(1, 2, 3), 6);
  }
}
reifyIterator();

function overwriteIterator() {
  var callCount = 0;
  function Iterator() {
    callCount += 1;
    return Array.prototype[Symbol.iterator].call(this);
  }

  var overwrite = false;
  function f() {
    "use strict";

    if (overwrite) {
      arguments[Symbol.iterator] = Iterator;
    }

    var sum = 0;
    for (var v of arguments) {
      sum += v;
    }
    return sum;
  }

  for (var i = 0; i <= 100; ++i) {
    overwrite = i > 50;
    print(f(1, 2, 3), 6);
  }
  print(callCount, 50);
}
overwriteIterator();

function deleteIterator() {
  var remove = false;
  function f() {
    "use strict";

    
    
    
    if (remove) {
      delete arguments[Symbol.iterator];
    }

    var sum = 0;
    for (var v of arguments) {
      sum += v;
    }
    return sum;
  }

  var error;
  try {
    for (var i = 0; i <= 100; ++i) {
      remove = i === 100;
      print(f(1, 2, 3), 6);
    }
  } catch (e) {
    error = e;
  }
  print(error instanceof TypeError, true);
}
deleteIterator();

function deleteIteratorInherit() {
  var callCount = 0;
  function Iterator() {
    callCount += 1;
    return Array.prototype[Symbol.iterator].call(this);
  }

  Object.prototype[Symbol.iterator] = Iterator;

  var remove = false;
  function f() {
    "use strict";

    
    
    
    if (remove) {
      delete arguments[Symbol.iterator];
    }

    var sum = 0;
    for (var v of arguments) {
      sum += v;
    }
    return sum;
  }

  for (var i = 0; i <= 100; ++i) {
    remove = i === 100;
    print(f(1, 2, 3), 6);
  }
  print(callCount, 1);

  delete Object.prototype[Symbol.iterator];
}
deleteIteratorInherit();



