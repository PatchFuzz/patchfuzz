














function check_reference_error (code)
{
  try {
    eval (code)
    assert (false)
  } catch (e) {
    assert (e instanceof ReferenceError)
  }
}

check_reference_error("for (let x of [x]) {}")
check_reference_error("for (const x of [x]) {}")

check_reference_error("for (let x in {x}) {}")
check_reference_error("for (const x in {x}) {}")
