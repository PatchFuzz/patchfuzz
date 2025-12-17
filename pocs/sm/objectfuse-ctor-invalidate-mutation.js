function changeMath(i) {
  with (this) {} 
  if (i === 1980) {
    Math.floor = function() { return 5000; };
  }
}
function f() {
  var res = 0;
  for (var i = 0; i < 2000; i++) {
    res += Math.floor(i);
    changeMath(i);
  }
  print(res, 2056190);
}
f();
