













try {
  eval('while(0 ? 0 : ()=>{} | {})')
  assert(false)
} catch (e) {
  assert(e instanceof SyntaxError)
}
