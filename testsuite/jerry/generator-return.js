

function check_result(result, value, done)
{
  assert(result.value === value)
  assert(result.done === done)
}

function * gen1(a) {
  return "a: " + (yield a.p)
}

var f = gen1({})
check_result(f.return(4), 4, true)
check_result(f.next(), undefined, true)

f = gen1({ p:"x" })
check_result(f.next(), "x", false)
check_result(f.return(10), 10, true)
check_result(f.next(), undefined, true)

f = gen1({ p:"b" })
check_result(f.next(), "b", false)
check_result(f.next(), "a: undefined", true)
check_result(f.next(), undefined, true)

function*gen2() {
  try {
    for (let i in { x:1, y:2 })
    {
      assert((yield i) === "33")
    }
    assert(false)
  } catch (e) {
    assert(false)
  } finally {
    yield "z"
  }
}

f = gen2()
check_result(f.return("ret"), "ret", true)
check_result(f.next(), undefined, true)

f = gen2()
check_result(f.next(), "x", false)
check_result(f.return("ret"), "z", false)
check_result(f.next(), "ret", true)
check_result(f.next(), undefined, true)

function* gen3() {
  try {
    return 8
  } finally {
    yield 1
  }
}

f = gen3()
check_result(f.next(), 1, false)
check_result(f.return(2), 2, true)
