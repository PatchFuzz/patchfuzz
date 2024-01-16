





var z = {valueOf: function() { return 3; }};

(function() {
  try {
    var tmp = { x: 12 };
    with (tmp) {
      z++;
    }
    throw new Error("boom");
  } catch(e) {}
})();
