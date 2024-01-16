

let a = 4

var f = () => {
  eval("var a = 5")
  assert(a === 5)
}
f()

assert(a === 4)

function g() {
  eval("var b = 6")

  assert(b === 6)

  var h = () => delete b
  h()

  try {
    b
    assert(false)
  } catch (e) {
    assert(e instanceof ReferenceError)
  }
}
g()
