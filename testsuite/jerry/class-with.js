

var called = false
var obj = { f() { assert(this === obj); called = true } }

function f() {
  assert(false)
}

with (obj) {
  new class {
    constructor() {
      f()
    }
  }
}

assert(called)
