function changeGlobalProp(i) {
  with (this) {} 
  if (i === 1900) {
    Object.defineProperty(globalThis, "globalProp", {get: function() {
      return 5;
    }});
  }
}

Object.defineProperty(globalThis, "globalProp", {get: function() {
  return 3;
}, configurable: true});

function f() {
  var res = 0;
  for (var i = 0; i < 2000; i++) {
    res += globalProp;
    changeGlobalProp(i);
  }
  print(res, 6198);
}
f();
