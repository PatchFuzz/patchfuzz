try {
  let x = ((function f(y) {
    if (y > 0) {
      f(-1)
    }
    x
  })(1))
} catch (e) {
  print(e instanceof ReferenceError, true);
}
