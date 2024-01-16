













var v1 = Object(Symbol("symbol"))
var v2 = new RegExp();
var v3 = new Array(v1)

try {
  var v4 = v3.forEach(function(p_0, p_1, p_2) { return p_0 + p_1 + p_2; }, v2);
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}
