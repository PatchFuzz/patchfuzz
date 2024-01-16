













function test(len)
{
  function applyTest() { }
  try {
    applyTest.apply(null, { length : len });
    assert(false);
  } catch (e) {
    assert(e instanceof RangeError);
  }
}

test(65536);
test(0x40000001);
test(0xffffffff);
