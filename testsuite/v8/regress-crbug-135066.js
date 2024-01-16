



























var filler = "


assertEquals(23, eval(
  "'use strict';" +
  "var x = 23;" +
  "var f = function bozo1() {" +
  "  return x;" +
  "};" +
  "assertSame(23, f());" +
  "f;" +
  filler
)());


assertEquals(42, (function() {
  "use strict";
  return eval(
    "var y = 42;" +
    "var g = function bozo2() {" +
    "  return y;" +
    "};" +
    "assertSame(42, g());" +
    "g;" +
    filler
  )();
})());
