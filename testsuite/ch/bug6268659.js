




var func0 = function () {
  for (var _strvar0 in ary) {
    ary[1] = 0;
    if (ary.length > 1) {
      break;
    }
    --a;
  }
};
var a = 1;
var ary = [,,0];
func0();
ary = [,0];
ary.shift();
func0();
print(a === 1 ? "PASSED" : "FAILED");
