

function check_syntax_error (code) {
  try {
    eval(code)
    assert (false)
  } catch (e) {
    assert (e instanceof SyntaxError)
  }
}

eval("\u{000010C80}: break \ud803\udc80")
eval("\\u{10C80}: break \ud803\udc80")
eval("$\u{000010C80}$: break $\ud803\udc80$")
eval("$\\u{10C82}$: break $\ud803\udc82$")

assert("\u{000010C80}".length === 2)
assert("x\u{010C80}y".length === 4)
assert("\u{10C80}" === "\ud803\u{dc80}")
assert("\u{0}\x01" === "\u0000\u0001")


check_syntax_error("\\u{10C80}: break \\ud803\\udc80");
