





for (let i = 0, j = 0; i < 10; ++i) {
  let x = (-0xffffffffffffffff_ffffffffffffffffn >> 0x40n);
  assertEquals(-0x10000000000000000n, x);
  %SimulateNewspaceFull();
}
