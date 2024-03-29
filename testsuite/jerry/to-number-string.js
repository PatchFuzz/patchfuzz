

assert(+"0b1101001" === 105);
assert(+"0B1101001" === 105);
assert(+"0o767" === 503);
assert(+"0O767" === 503);

function assertNaN(str) {
  assert(isNaN(+str));
}

assertNaN("0b");
assertNaN("0b12");
assertNaN("0b10101100103");
assertNaN("0b101foo");
assertNaN("0bfoo101");
assertNaN("0b12345");

assertNaN("0B");
assertNaN("0B12");
assertNaN("0B10101100103");
assertNaN("0B101foo");
assertNaN("0Bfoo101");
assertNaN("0B12345");

assertNaN("0o");
assertNaN("0o1289");
assertNaN("0o88888");
assertNaN("0o12345foo");
assertNaN("0ofoo12345");

assertNaN("0O");
assertNaN("0O1289");
assertNaN("0O88888");
assertNaN("0O12345foo");
assertNaN("0Ofoo12345");
