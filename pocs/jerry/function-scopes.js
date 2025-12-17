try {
  (function() {
    function decl() {}
  })();
  decl();
  assert(false);
} catch (e) {
  assert(e instanceof ReferenceError);
}

try {
  var o = {
    get p() {
      function decl() {
      }
    }
  };
  decl();
  assert(false);
} catch (e) {
  assert(e instanceof ReferenceError);
}
