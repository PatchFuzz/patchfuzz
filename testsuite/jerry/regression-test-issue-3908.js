













try {
  eval("async(a,b+)")
  assert(false)
} catch (e) {
  assert(e instanceof SyntaxError)
}
