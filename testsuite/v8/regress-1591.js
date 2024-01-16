


























var stack;
var used_custom_lookup = false;

({
  __lookupGetter__ : function() {
    used_custom_lookup = true;
  },

  test : function() {
    try {
      f();
    } catch (err) {
      stack = err.stack;
    }
  }
}).test();

var expected_message = "ReferenceError: f is not defined";
assertTrue(stack.indexOf(expected_message) >= 0);
assertFalse(used_custom_lookup);
