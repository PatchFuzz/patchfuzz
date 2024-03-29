













try {
    d = new Date (-8640000000000001)
    assert (d == "Invalid Date")
    d.toISOString()
    assert(false);
} catch (e) {
    assert(e instanceof RangeError)
}

assert (new Date (-8640000000000000).toISOString() == "-271821-04-20T00:00:00.000Z")

assert (new Date(-62167219200001).toISOString() == "-000001-12-31T23:59:59.999Z")
assert (new Date(-62167219200000).toISOString() == "0000-01-01T00:00:00.000Z")

assert (new Date(-61851600000001).toISOString() == "0009-12-31T23:59:59.999Z")
assert (new Date(-61851600000000).toISOString() == "0010-01-01T00:00:00.000Z")

assert (new Date(-59011459200001).toISOString() == "0099-12-31T23:59:59.999Z")
assert (new Date(-59011459200000).toISOString() == "0100-01-01T00:00:00.000Z")

assert (new Date(-30610224000001).toISOString() == "0999-12-31T23:59:59.999Z")
assert (new Date(-30610224000000).toISOString() == "1000-01-01T00:00:00.000Z")

assert (new Date(-1).toISOString() == "1969-12-31T23:59:59.999Z")
assert (new Date(0).toISOString() == "1970-01-01T00:00:00.000Z")
assert (new Date(1).toISOString() == "1970-01-01T00:00:00.001Z")

assert (new Date(253402300799999).toISOString() == "9999-12-31T23:59:59.999Z")
assert (new Date(253402300800000).toISOString() == "+010000-01-01T00:00:00.000Z")

assert (new Date (8640000000000000).toISOString() == "+275760-09-13T00:00:00.000Z")

try {
    d = new Date (8640000000000001)
    assert (d == "Invalid Date")
    d.toISOString()
    assert(false);
} catch (e) {
    assert(e instanceof RangeError)
}
