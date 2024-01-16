

try {
  new BigInt("1")
  assert(false)
} catch (e) {
  assert(e instanceof TypeError)
}

function check_type_error (code)
{
  try {
    eval(code)
    assert(false)
  } catch (e) {
    assert(e instanceof TypeError)
  }
}

check_type_error("+BigInt('0')")

check_type_error("BigInt('1') + 1")
check_type_error("BigInt('2') - 2")
check_type_error("BigInt('3') * 3")
check_type_error("BigInt('4') / 4")
check_type_error("BigInt('5') % 5")
check_type_error("BigInt('6') ** 6")

check_type_error("1 + BigInt('1')")
check_type_error("2 - BigInt('2')")
check_type_error("3 * BigInt('3')")
check_type_error("4 / BigInt('4')")
check_type_error("5 % BigInt('5')")
check_type_error("6 ** BigInt('6')")

check_type_error("BigInt('1') & 1")
check_type_error("BigInt('2') | 2")
check_type_error("BigInt('3') ^ 3")
check_type_error("BigInt('4') << 4")
check_type_error("BigInt('5') >> 5")
check_type_error("BigInt('6') >>> 6")

check_type_error("1 & BigInt('1')")
check_type_error("2 | BigInt('2')")
check_type_error("3 ^ BigInt('3')")
check_type_error("4 << BigInt('4')")
check_type_error("5 >> BigInt('5')")
check_type_error("6 >>> BigInt('6')")
