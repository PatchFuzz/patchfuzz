















function check_syntax_error (code)
{
  try {
    eval (code)
    assert (false)
  } catch (e) {
    assert (e instanceof SyntaxError)
  }
}

check_syntax_error("function async f() {}")
check_syntax_error("(a,b) async => 1")

check_syntax_error("async * (a,b) => 1")
check_syntax_error("({ *async f() {} })")
check_syntax_error("class C { async static f() {} }")
check_syntax_error("class C { * async f() {} }")
check_syntax_error("class C { static * async f() {} }")


function check_promise(p, value)
{
  assert(p instanceof Promise)

  p.then(function(v) {
    assert(v === value)
  })
}

var o = {
  async f() { return 1 },
  async() { return 2 },
  async *x() {}, 
}

check_promise(o.f(), 1)
assert(o.async() === 2)

class C {
  async f() { return 3 }
  async *x() {} 
  static async f() { return 4 }
  static async *y() {} 
  async() { return 5 }
  static async() { return 6 }
}

var c = new C

check_promise(c.f(), 3)
check_promise(C.f(), 4)
assert(c.async() === 5)
assert(C.async() === 6)
