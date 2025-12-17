(function() {
  class reg extends RegExp {}

  let r;
  function trigger() {
    try {
      trigger();
    } catch {
      Reflect.construct(RegExp,[],reg);
    }
  }
  trigger();
})();

(function() {
  class reg extends Function {}

  let r;
  function trigger() {
    try {
      trigger();
    } catch {
      Reflect.construct(RegExp,[],reg);
    }
  }
  trigger();
})();
