
function g() {
  var rv = (function() {
    this << 1
  })()
  if (a) (function() {})
}
g()

