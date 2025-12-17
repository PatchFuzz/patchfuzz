function changeMath(i) {
  with (this) {} 
  if (i === 1980) {
    Object.defineProperty(globalThis, "Math", {get: function() {
      return {abs: function() { return -1; }};
    }});
  }
}
function f() {
  var res = 0;
  for (var i = 0; i < 2000; i++) {
    res += Math.abs(i);
    changeMath(i);
  }
  print(res, 1961171);
}
f();
