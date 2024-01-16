


























var array = new Int32Array(10);
function check() {
  for (var i = 0; i < 4; i++) {
    assertEq(undefined, array["-1"]);
  }
}
check();
check();
