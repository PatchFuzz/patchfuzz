





(function testOriginalRepro() {
  var result;
  var dict = { toString() { result = v;} };
  for (var v of ['fontsize', 'sup']) {
    String.prototype[v].call(dict);
    assertEquals(v, result);
  }
})();

(function testSimpler() {
  var result;
  function setResult() { result = v; }
  for (var v of ['hello', 'world']) {
    setResult();
    assertEquals(v, result);
  }
})();
