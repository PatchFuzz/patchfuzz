














assert (01239 === 1239)
assert (0999 === 999)
assert (0000000000009 === 9)

function invalid_strict_cases (string)
{
  "use strict"
  try {
    eval (string)
    assert (false)
  } catch (e) {
    assert (true)
  }
}


invalid_strict_cases ("09")
invalid_strict_cases ("01239")


function invalid_cases (string)
{
  try {
    eval (string)
    assert (false)
  } catch (e) {
    assert (true)
  }
}

invalid_cases ("09n")
invalid_cases ("01239n")
