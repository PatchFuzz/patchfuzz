

const a = 6
assert(!delete a)
assert(a === 6)

try {
  eval("a = 7")
  assert(false)
} catch (e) {
  assert(e instanceof TypeError)
}

function check_type_error(code) {
  try {
    eval(code)
    assert(false)
  } catch (e) {
    assert(e instanceof TypeError)
  }
}


check_type_error("{ const a = 0; a = 1 }");
check_type_error("{ const a = 0; a += 1 }");
check_type_error("{ const a = 0; a -= 1 }");
check_type_error("{ const a = 0; a *= 1 }");
check_type_error("{ const a = 0; a %= 1 }");
check_type_error("{ const a = 0; a /= 1 }");
check_type_error("{ const a = 0; a <<= 1 }");
check_type_error("{ const a = 0; a >>= 1 }");
check_type_error("{ const a = 0; a >>>= 1 }");
check_type_error("{ const a = 0; a &= 1 }");
check_type_error("{ const a = 0; a |= 1 }");
check_type_error("{ const a = 0; a ^= 1 }");
check_type_error("{ const a = 0; a++ }");
check_type_error("{ const a = 0; a-- }");
check_type_error("{ const a = 0; ++a }");
check_type_error("{ const a = 0; --a }");
check_type_error("{ const a = 0; [a] = [1] }");
check_type_error("{ const a = 0; ({a} = { a:1 }) }");


check_type_error("{ const a = 0; (function (){ a = 1 })() }");
check_type_error("{ const a = 0; (function (){ a += 1 })() }");
check_type_error("{ const a = 0; (function (){ a -= 1 })() }");
check_type_error("{ const a = 0; (function (){ a *= 1 })() }");
check_type_error("{ const a = 0; (function (){ a %= 1 })() }");
check_type_error("{ const a = 0; (function (){ a /= 1 })() }");
check_type_error("{ const a = 0; (function (){ a <<= 1 })() }");
check_type_error("{ const a = 0; (function (){ a >>= 1 })() }");
check_type_error("{ const a = 0; (function (){ a >>>= 1 })() }");
check_type_error("{ const a = 0; (function (){ a &= 1 })() }");
check_type_error("{ const a = 0; (function (){ a |= 1 })() }");
check_type_error("{ const a = 0; (function (){ a ^= 1 })() }");
check_type_error("{ const a = 0; (function (){ a++ })() }");
check_type_error("{ const a = 0; (function (){ a-- })() }");
check_type_error("{ const a = 0; (function (){ ++a })() }");
check_type_error("{ const a = 0; (function (){ --a })() }");
check_type_error("{ const a = 0; (function (){ [a] = [1] })() }");
check_type_error("{ const a = 0; (function (){ ({a} = { a:1 }) })() }");
