






























var length = 2048;
var s = "";
for (var i = 0; i < 2048; i++) {
  s += '.';
}

var string = s + 'x' + s + 'x' + s;

string.replace(/x/g, "")
