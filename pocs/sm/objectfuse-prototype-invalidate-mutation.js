function changeProto(i) {
  with (this) {} 
  if (i === 1980) {
    String.prototype.toString = function() { return "abcd"; };
  }
}
function f() {
  var res = 0;
  for (var i = 0; i < 2000; i++) {
    res += "a".toString().length;
    changeProto(i);
  }
  print(res, 2057);
}
f();
