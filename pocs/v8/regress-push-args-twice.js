try {
  for (var key = 0; key != 10; key++) {
    var x = 1 + undefined;
  }
} catch(e) {
  fail("no exception", e);
}
