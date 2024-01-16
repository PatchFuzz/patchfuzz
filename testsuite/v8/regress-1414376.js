





(function () {
  assertEquals = function assertEquals() {};
})();
function __f_0() {}
function __f_6() {
  for (var __v_6 = -2147483648; __v_6 < 0; __v_6 += 100000) {
    assertEquals(__f_0(), Math.floor(__v_6 / 0));
  }
};
__f_6();
