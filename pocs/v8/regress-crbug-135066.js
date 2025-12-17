var filler = "


print(23, eval(
  "'use strict';" +
  "var x = 23;" +
  "var f = function bozo1() {" +
  "  return x;" +
  "};" +
  "print(23, f());" +
  "f;" +
  filler
)());


print(42, (function() {
  "use strict";
  return eval(
    "var y = 42;" +
    "var g = function bozo2() {" +
    "  return y;" +
    "};" +
    "print(42, g());" +
    "g;" +
    filler
  )();
})());
