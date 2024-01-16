



function check_result(result, value, done)
{
  assert(result.value === value)
  assert(result.done === done)
}

function * gen1(a = (t = 8)) {
  var o = { p: 2 }
  var x = 3.25

  assert((o.p + (yield 10)) === 23)
  assert((o.p + (yield 11)) === 24)
  return x
}


try {
  new gen1
  assert(false)
} catch (e) {
  assert(e instanceof TypeError)
}


var t = 0
var g = gen1()
assert(t === 8)

check_result(g.next(20), 10, false)
check_result(g.next(21), 11, false)
check_result(g.next(22), 3.25, true)
check_result(g.next(23), undefined, true)


t = 0
g = gen1()
assert(t === 8)

check_result(g.next(20), 10, false)

function * gen2() {
  for (i in { x:0, y:1, z:2 })
  {
    let a = eval("'s'")

    var b = yield a + i
    assert (b === ++t)
  }
}


t = 0
f = gen2()

check_result(f.next(0), "sx", false)
check_result(f.next(1), "sy", false)
check_result(f.next(2), "sz", false)
check_result(f.next(3), undefined, true)
check_result(f.next(4), undefined, true)


f = gen2()

t = 0
check_result(f.next(0), "sx", false)

function *gen3() {
  function f(yield) {
    return -yield * 2
  }

  var g = (v) => {
    assert(v === 6)
  }

  g(yield yield f(++t))

  return 77
}


t = 0
f = gen3()

check_result(f.next(0), -2, false)
check_result(f.next(88), 88, false)
check_result(f.next(6), 77, true)


t = 0
f = gen3()

check_result(f.next(0), -2, false)

function
       *
       gen4() {

  let a = eval("5")
  with ({a})
  {
    let a = eval("6")

    for (let a = 10; a < 11; a++)
    {
      let a = eval("7")
      yield (a)
    }

    yield a, !assert(a === 6)
  }
  assert((yield a) === undefined)
}


f = gen4()

check_result(f.next(), 7, false)
check_result(f.next(), 6, false)
check_result(f.next(), 5, false)
check_result(f.next(), undefined, true)


f = gen4()

check_result(f.next(), 7, false)

function*gen5(a,b,c,d) {
  yield a
  yield b
  yield c
  yield d
}


t = []
for(let i of gen5(1,3,5,7)) {
  t.push(i)
}

assert(t.length === 4)
assert(t[0] === 1)
assert(t[1] === 3)
assert(t[2] === 5)
assert(t[3] === 7)


t = []
for(let i of gen5(1,3,5,7)) {
  t.push(i)
  if (i === 3) {
    break
  }
}

assert(t.length === 2)
assert(t[0] === 1)
assert(t[1] === 3)


function* gen6(a,b,c,d) {
  yield f.next()
}

f = gen6()

try {
  f.next()
  assert(false)
} catch (e) {
  assert(e instanceof TypeError)
}


function* gen7() {
  yield
}

f = gen7()
check_result(f.next(), undefined, false)
check_result(f.next(), undefined, true)

