function TestFunctionPrototypeSetter() {
  var f = function() {};
  var o = {__proto__: f};
  o.prototype = 42;
  print(42, o.prototype);
  print(o.hasOwnProperty('prototype'));
}
TestFunctionPrototypeSetter();


function TestFunctionPrototypeSetterOnValue() {
  var f = function() {};
  var fp = f.prototype;
  Number.prototype.__proto__ = f;
  var n = 42;
  var o = {};
  n.prototype = o;
  print(fp, n.prototype);
  print(fp, f.prototype);
  print(Number.prototype.hasOwnProperty('prototype'));
}
TestFunctionPrototypeSetterOnValue();


function TestArrayLengthSetter() {
  var a = [1];
  var o = {__proto__: a};
  o.length = 2;
  print(2, o.length);
  print(1, a.length);
  print(o.hasOwnProperty('length'));
}
TestArrayLengthSetter();


function TestArrayLengthSetterOnValue() {
  Number.prototype.__proto__ = [1];
  var n = 42;
  n.length = 2;
  print(1, n.length);
  print(Number.prototype.hasOwnProperty('length'));
}
TestArrayLengthSetterOnValue();
