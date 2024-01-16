

var two = 2
var three = 3


assert(2 ** 3 ** 2 === 512)
assert((2 ** 3) ** 2 === 64)
assert(2 ** (3 ** 2) === 512)
assert(two ** three ** two === 512)
assert((two ** three) ** two === 64)
assert(two ** (three ** two) === 512)

assert(2 ** 2 * 3 ** 3 === 4 * 27)
assert(two ** two * three ** three === 4 * 27)

var a = 3
assert((a **= 3) === 27)
assert(a === 27)

a = 2
assert((a **= a **= 2) === 16)
assert(a === 16)

function assertThrows(src) {
  try {
    eval(src)
    assert(false)
  } catch (e) {
    assert(e instanceof SyntaxError)
  }
}

assertThrows("-2 ** 2")
assertThrows("+a ** 2")
assertThrows("!a ** 2")
assertThrows("~a ** 2")
assertThrows("void a ** 2")
assertThrows("typeof a ** 2")
assertThrows("delete a ** 2")
assertThrows("!(-a) ** 2")

assert((-2) ** 2 === 4)

a = 3
assert((-+-a) ** 3 === 27)

a = 0
assert((!a) ** 2 === 1)

a = 0
assert(isNaN((void a) ** 3))

a = -4
assert(++a ** 2 === 9)
assert(a === -3)

a = -2
assert(a-- ** 2 === 4)
assert(a === -3)
