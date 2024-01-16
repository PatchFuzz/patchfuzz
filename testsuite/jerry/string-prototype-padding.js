

var test = "bar"

assert(test.padStart("5", "foo") === "fobar")
assert(test.padStart(6, "foo") === "foobar")
assert(test.padStart(8, '1234')=== "12341bar")
assert(test.padEnd(5, "baz") === "barba")
assert(test.padEnd(6, "baz") === "barbaz")
assert(test.padEnd(8, '1234')=== "bar12341")


assert(test.padStart(-5, "foo") === "bar")
assert(test.padEnd(-5, "foo") === "bar")


assert(test.padStart(10) === "       bar")
assert(test.padEnd(10) === "bar       ")


assert(test.padEnd(10, "") === "bar")
assert(test.padStart(10, "") === "bar")



var unicode_padded = "a".padStart(4 ,"𐋀")
assert(unicode_padded.charCodeAt(0) == 55296)
assert(unicode_padded.charCodeAt(1) == 57024)
assert(unicode_padded.charCodeAt(2) == 55296)
assert(unicode_padded.charCodeAt(3) == 97)

unicode_padded = "a".padEnd(4 ,"𐋀")
assert(unicode_padded.charCodeAt(0) == 97)
assert(unicode_padded.charCodeAt(1) == 55296)
assert(unicode_padded.charCodeAt(2) == 57024)
assert(unicode_padded.charCodeAt(3) == 55296)


unicode_padded = "𐋂".padStart(4 ,"𐋀")
assert(unicode_padded.charCodeAt(0) == 55296)
assert(unicode_padded.charCodeAt(1) == 57024)
assert(unicode_padded.charCodeAt(2) == 55296)
assert(unicode_padded.charCodeAt(3) == 57026)


try {
  test.padStart(Symbol("Will this fail?"), "It should" )
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}
try {
  test.padEnd(Symbol("Will this fail?"), "It should" )
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

try {
  test.padStart(10, Symbol("Fail, this should. " ))
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}
try {
  test.padEnd(10, Symbol("Fail, this should. " ))
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}
