function checkWeakRef(f, isCleared = true) {
  let [wr, args] = f({});

  print(wr.deref() !== undefined, true);

  clearKeptObjects();
  gc();

  
  
  
  
  print(wr.deref() === undefined, isCleared);
}

checkWeakRef(function() {
  
  let wr = new WeakRef(arguments[0]);

  
  arguments[0] = null;

  
  return [wr, arguments];
});

checkWeakRef(function() {
  
  let wr = new WeakRef(arguments[0]);

  
  Object.defineProperty(arguments, 0, {value: null});

  
  return [wr, arguments];
});

checkWeakRef(function self() {
  
  let wr = new WeakRef(arguments[0]);

  
  delete arguments[0];

  
  return [wr, arguments];
},  false);

checkWeakRef(function() {
  "use strict";

  
  let wr = new WeakRef(arguments[0]);

  
  arguments[0] = null;

  
  return [wr, arguments];
});

checkWeakRef(function() {
  "use strict";

  
  let wr = new WeakRef(arguments[0]);

  
  Object.defineProperty(arguments, 0, {value: null});

  
  return [wr, arguments];
},  false);

checkWeakRef(function() {
  "use strict";

  
  let wr = new WeakRef(arguments[0]);

  
  delete arguments[0];

  
  return [wr, arguments];
},  false);
