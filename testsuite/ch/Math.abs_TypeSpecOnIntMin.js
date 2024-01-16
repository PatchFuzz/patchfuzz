




var ary = Array();
var func2 = function (a) {
  var i = 1;
  do {
    if (i++ >= 2) {
      break;
    }
    ary.push(a);
    a = Math.abs(-2147483648);
  } while (true);
};
func2(3);
func2(132);

WScript.Echo("pass");
