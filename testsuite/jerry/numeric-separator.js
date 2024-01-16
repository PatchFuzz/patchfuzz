















assert (1_1 == 11)
assert (0x11_11 == 4369)
assert (0b11_11 == 15)
assert (0o11_11 == 585)
assert (1_1n == 11n)
assert (100_001.11_00 == 100001.11)
assert (0x11_11n == 4369n)



function invalid_numeric_separator (expression)
{
  try {
    var a = eval (expression)
    assert (false)
  } catch (e) {
    assert (true)
  }
}


invalid_numeric_separator ("_1_1")
invalid_numeric_separator ("1__1")
invalid_numeric_separator ("1_1_n")
invalid_numeric_separator ("1_1n_")
invalid_numeric_separator ("0b_11")
invalid_numeric_separator ("0x_11")
invalid_numeric_separator ("0o_11")
invalid_numeric_separator ("0_0.123")
