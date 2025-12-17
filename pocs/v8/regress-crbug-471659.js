var s = "0123456789ABCDEF";
for (var i = 0; i < 16; i++) s += s;

var count = 0;
function f() {
  try {
    f();
    if (count < 10) {
      f();
    }
  } catch(e) {
      s.replace("+", "-");
  }
  count++;
}
f();
