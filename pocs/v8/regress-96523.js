with ({x:'outer'}) {
  (function() {
    var x = 'inner';
    try {
      throw 'Exception';
    } catch (e) {
      print('inner', x);
    }
  })()
}
