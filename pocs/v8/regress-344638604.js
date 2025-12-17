(function() {
  var obj = {};
  var val = {};
  Object.defineProperty(obj, "x", {
    value: val,
    enumerable: true
  });
  val[10000] = [];
  var clone = { ...obj};
  obj = {};
  Object.defineProperty(obj, "x", {
    enumerable: true
  });
  clone = { ...obj };
})();
