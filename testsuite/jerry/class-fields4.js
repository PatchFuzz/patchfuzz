













try {
  {
    A;
    class A { }
  }
  assert(false)
} catch (e) {
  assert(e instanceof ReferenceError)
}

try {
  {
    class A { [A] () {} }
  }
  assert(false)
} catch (e) {
  assert(e instanceof ReferenceError)
}

try {
  {
    var a = class A { [A] () {} }
  }
  assert(false)
} catch (e) {
  assert(e instanceof ReferenceError)
}

{
  class C {
    a = C
    static b = C
  }

  var X = C
  C = 6
  var c = new X

  assert(X.b === X)
  assert(c.a === X)
}

{
  let a = 6
  let b = 7
  class C {
    p = a + b
  }
  assert((new C).p === 13)
}

try {
  {
    class C { static a = C = 5  }
  }
  assert(false)
} catch (e) {
  assert(e instanceof TypeError)
}

try {
  {
    class C { static [C = 5] = 6 }
  }
  assert(false)
} catch (e) {
  assert(e instanceof ReferenceError)
}
