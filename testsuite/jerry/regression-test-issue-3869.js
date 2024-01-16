













try {
  eval('function a ({ *x:x }) {}')
  assert(false)
} catch (e) {
  assert(e instanceof SyntaxError)
}
