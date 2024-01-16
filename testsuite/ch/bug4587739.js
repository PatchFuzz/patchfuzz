




















var int = true;
function test() {
  var start = int ? 1 : -5;
  var end = start + 8;
  for (var i = start; i < end; i++) {
    a[i] = 3;
  }
  int = false;
}
var a = Array(10);
a.fill();
test();
test();
a[0];

print("PASSED");










