function _p(arg1, arg2) {
  return arg1 ? arg1 : arg2;
}

var _ref;
var constructor = _p(this, (_ref = Object.getPrototypeOf(function (){})).call({}));
assert(constructor === this);

try {
  _p(this, (_ref += Object.getPrototypeOf(function (){})).call({}));
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}
