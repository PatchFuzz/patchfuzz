













var count = 0

class C1 {
  constructor() {
    assert(++count === 3)
  }

  a = (assert(++count === 2), 1.1)
}

class C2 extends C1 {
  constructor() {
    var s = () => super()

    function g() {
      assert(++count === 1)
      eval("s()");
    }

    g();
    assert(++count === 5)
  }

  b = (assert(++count === 4), "prop")
}

var c = new C2
assert(count === 5)
assert(c.a === 1.1)
assert(c.b === "prop")

var o = {}
count = 0

class C3 extends C1 {
  constructor() {
    var s = () => () => eval("() => eval('super()')")

    function g() {
      assert(++count === 1)
      s()()()
    }

    g();
    assert(++count === 5)
  }

  b = (assert(++count === 4), o)
}

c = new C3
assert(count === 5)
assert(c.a === 1.1)
assert(c.b === o)

var f
class C4 extends Array {
  a = 6.6

  constructor() {
    f = () => super()
    super()
  }
}
c = new C4
assert(c.a === 6.6)

try {
  f()
  assert(false)
} catch(e) {
  assert(e instanceof ReferenceError)
}
