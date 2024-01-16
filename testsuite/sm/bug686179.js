



(function () {
  assertEquals = function assertEquals(expected, found, name_opt) {  };
  assertTrue = function assertTrue(value, name_opt) {  };
})();
function f0() {}
function f1(x) {}
function test(f) {
  assertTrue(null === (assertEquals).arguments);
}
test(f0);
test(f1);
