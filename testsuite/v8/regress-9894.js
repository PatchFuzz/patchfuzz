



(function frozen() {
  const ary = [1.1]
  Object.defineProperty(ary, 0, {get:run_it} );

  
  ary.includes();

  function run_it(el) {
    ary.length = 0;
    ary[0] = 1.1;
    Object.freeze(ary);
    return 2.2;
  }
})();

(function seal() {
  const ary = [1.1]
  Object.defineProperty(ary, 0, {get:run_it} );

  
  ary.includes();

  function run_it(el) {
    ary.length = 0;
    ary[0] = 1.1;
    Object.seal(ary);
    return 2.2;
  }
})();

(function preventExtensions() {
  const ary = [1.1]
  Object.defineProperty(ary, 0, {get:run_it} );

  
  ary.includes();

  function run_it(el) {
    ary.length = 0;
    ary[0] = 1.1;
    Object.preventExtensions(ary);
    return 2.2;
  }
})();
