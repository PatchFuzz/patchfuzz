(function () {
  assertEquals = function print(expected, found, name_opt) {  };
  assertTrue = function print(value, name_opt) {  };
})();
function f0() {}
function f1(x) {}
function test(f) {
  print(null === (assertEquals).arguments);
}
test(f0);
test(f1);
