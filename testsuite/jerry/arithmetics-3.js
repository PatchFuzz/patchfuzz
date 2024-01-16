













var o1 = { valueOf() { return Symbol() } }
var o2 = { valueOf() { throw "Should not reach here" } }

function check_type_error(code) {
  try {
    eval(code)
    assert(false)
  } catch (e) {
    assert(e instanceof TypeError)
  }
}

check_type_error("o1 - o2")
check_type_error("o1 * o2")
check_type_error("o1 / o2")
check_type_error("o1 % o2")
check_type_error("o1 ** o2")
check_type_error("o1 | o2")
check_type_error("o1 & o2")
check_type_error("o1 ^ o2")
check_type_error("o1 << o2")
check_type_error("o1 >> o2")
check_type_error("o1 >>> o2")
