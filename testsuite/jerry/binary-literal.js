

function checkSyntaxError (str) {
  try {
    eval(str);
    assert(false);
  } catch (e) {
    assert(e instanceof SyntaxError);
  }
}


checkSyntaxError("0c");
checkSyntaxError("0b");
checkSyntaxError("0b0123456");
checkSyntaxError("0b2");

checkSyntaxError("0C");
checkSyntaxError("0B");
checkSyntaxError("0B2");

checkSyntaxError("000b01010101");
checkSyntaxError("010b01010101");
checkSyntaxError("11 0b01010101");


assert(0b111 === 7);
assert(0b111110111 === 503);
assert(0b111101010101 === 3925);
assert(0b00000000000001 === 1);
assert(0b00000000000000 === 0);
assert(0b1101001 === parseInt ("1101001", 2));

assert(0B111 === 7);
assert(0B111110111 === 503);
assert(0B111101010101 === 3925);
assert(0B00000000000001 === 1);
assert(0B00000000000000 === 0);
assert(0B1101001 === parseInt ("1101001", 2));
