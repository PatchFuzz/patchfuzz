













function _p(arg1, arg2) {
  return arg1 ? arg1 : arg2;
}

var _ref;
var constructor = _p(this, (_ref = Object.getPrototypeOf(function (){})).call({}));
print(constructor === this);

try {
  _p(this, (_ref += Object.getPrototypeOf(function (){})).call({}));
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}
