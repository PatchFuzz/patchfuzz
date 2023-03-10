;

var test = (function () {
  function f() {
    var x = function inner() {
	"use asm";
	function g() {}
	return g;
    };
  };
  return f.toString();
})();

try {
  evalWithCache(test, {});
} catch (x) {
  print(x.message.includes("Asm.js is not supported by XDR") ||
           x.message.includes("XDR encoding failure"), true);
}
