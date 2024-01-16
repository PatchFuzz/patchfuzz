

function check_range_error(code)
{
  try {
    eval(code);
    assert(false);
  } catch (e) {
    assert(e instanceof RangeError);
  }
}



check_range_error("new Uint8Array(1e15)");
check_range_error("new Uint8Array(4294967296)");
check_range_error("new Uint8Array(4294967296 - 1)");
check_range_error("new Uint8Array(-1)");


assert((new Uint8Array(3.5)).length === 3)
assert((new Uint8Array(-0.5)).length === 0)
