function changeMath(i) {
  with (this) {} 
  if (i === 1980) {
    delete Math;
  }
}
function f() {
  var res = 0;
  try {
    for (var i = 0; i < 2000; i++) {
      res += Math.abs(i);
      changeMath(i);
    }
  } catch {}
  print(res, 1961190);
}
f();
