function changeProto(i) {
  with (this) {} 
  if (i === 1980) {
    
    CustomProto.toString = function() { return "hi"; }
  }
}
var CustomProto = Object.create(Object.prototype);
function f() {
  var obj = Object.create(CustomProto);
  var res = 0;
  for (var i = 0; i < 2000; i++) {
    res += obj.toString().length;
    changeProto(i);
  }
  print(res, 29753);
}
f();
