function resumeAfterException(t) {
  for (var i = 0; i < 2; i++) {
    try {
      var x = 1;
      1_0000_0000_0000_0000n % 1n;
      x = 2;
      1_0000_0000_0000_0000n % t;
    } catch (e) {
      print(x, 2);
    }
  }
}
resumeAfterException(1n);
resumeAfterException(0n);
