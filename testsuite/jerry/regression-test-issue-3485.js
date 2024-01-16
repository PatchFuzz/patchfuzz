













var a = new Float32Array([$])

try {
  var $ = a.map(function () { $() });
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}
