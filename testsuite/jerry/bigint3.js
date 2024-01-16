

function check_result(bigint, expected)
{
  assert(bigint.toString() === expected)
}

function check_error (code, error_type)
{
  try {
    eval(code)
    assert(false)
  } catch (e) {
    assert(e instanceof error_type)
  }
}

check_error("BigInt(undefined)", TypeError)
check_error("BigInt(null)", TypeError)
check_error("BigInt(Symbol())", TypeError)

check_error("BigInt(0.25)", RangeError)
check_error("BigInt(-0.25)", RangeError)
check_error("BigInt(-10000000.25)", RangeError)
check_error("BigInt(4503599627370495.5)", RangeError)
check_error("BigInt(NaN)", RangeError)
check_error("BigInt(Infinity)", RangeError)

check_result(BigInt(true), "1")
check_result(BigInt(false), "0")
check_result(BigInt({ valueOf() { return "0x100" } }), "256")

check_result(BigInt(0), "0")
check_result(BigInt(-0), "0")
check_result(BigInt(8192), "8192")
check_result(BigInt(-0xffffffffff), "-1099511627775")
check_result(BigInt(0x1fffffffffffff), "9007199254740991")
check_result(BigInt(-4503599627370496), "-4503599627370496")
check_result(BigInt(4503599627370496.5), "4503599627370496")
check_result(BigInt(9007199254740991.5), "9007199254740992")
check_result(BigInt(0x1fffffffffffff * (2 ** 70)), "10633823966279325802638835764831453184")
check_result(BigInt(-0x1fffffffffffff * (2 ** 128)), "-3064991081731777376434327133362154903862870812598992896")

