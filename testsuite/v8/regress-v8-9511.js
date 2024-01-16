



var f = function() { return 1; };

(function func1() {
  eval("var f = function canary(s) { return 2; }");
})();

assertEquals(f(), 1);
