





























var m = Math;
var p = "floor";

function test() {
  var bignumber = 31363200000;
  assertEquals(m[p](Math.round(bignumber/864E5)/7)+1, 52);
}

test();
