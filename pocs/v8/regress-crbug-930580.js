(function outer() {
  (arg = (function inner() {
    return this
  })()) => 0;
})();
