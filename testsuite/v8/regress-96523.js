


























with ({x:'outer'}) {
  (function() {
    var x = 'inner';
    try {
      throw 'Exception';
    } catch (e) {
      assertEquals('inner', x);
    }
  })()
}
