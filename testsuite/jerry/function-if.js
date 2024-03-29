

function check_syntax_error (code)
{
  try {
    eval (code)
    assert (false)
  } catch (e) {
    assert (e instanceof SyntaxError)
  }
}

check_syntax_error ("'use strict'; if (true) function f() {}")
check_syntax_error ("'use strict'; if (true) ; else function f() {}")
check_syntax_error ("'use strict'; a: function f() {}")
check_syntax_error ("if (true) async function f() {}")
check_syntax_error ("if (true) ; else async function f() {}")
check_syntax_error ("if (true) a: function f() {}")
check_syntax_error ("if (true) ; else a: function f() {}")

var g = 1
var h = 1

function f1(p)
{
  assert(g === undefined)
  assert(h === undefined)

  if (p)
    
    function g() { return 3 }
  else
    
    function h() { return 4 }

  if (p) {
    assert(g() === 3)
    assert(h === undefined)
  } else {
    assert(g === undefined)
    assert(h() === 4)
  }
}

f1(true)
f1(false)

function f2()
{
  assert(g() === 2)
  a: b: c: d: function g() { return 2 }

  assert(h === undefined)

  {
    assert(h() === 3)
    a: b: c: d: function h() { return 3 }
  }

  assert(h() === 3)

  try {
    assert(h() === 4)
    a: b: c: d: function h() { return 4 }
    throw 1
  } catch (e) {
    assert(h() === 5)
    a: b: c: d: function h() { return 5 }
  } finally {
    assert(h() === 6)
    a: b: c: d: function h() { return 6 }
  }

  assert(h() === 6)

  switch (1) {
  default:
    assert(h() === 7)
    a: b: c: d: function h() { return 7 }
  }

  assert(h() === 7)
}
f2()

function f3()
{
  assert(h === undefined)

  {
    let a = eval("1")
    assert(a === 1)
    assert(h() === 1)
    a: b: c: d: function h() { return 1 }
  }

  assert(h() === 1)

  {
    eval("a: b: c: d: function h() { return 2 }")
    assert(h() === 2)
  }

  assert(h() === 2)
}
f3()
