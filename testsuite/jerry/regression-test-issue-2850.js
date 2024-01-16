













try {
  (function () {
    var d = new DataView(new ArrayBuffer())
    for (var $; ;) {
      d.setInt8(0)
    }
  })()
  assert (false);
} catch (e) {
  assert (e instanceof RangeError);
}

