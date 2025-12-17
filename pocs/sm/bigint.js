;

let test = `
  print(2n**64n - 1n, BigInt("0xffffFFFFffffFFFF"));

  
  print(0x7fff_ffff_ffff_ffffn + 1n, BigInt("0x8000000000000000"));
  print(0x8000_0000_0000_0000n + 2n, BigInt("0x8000000000000002"));

  
  print(-0x7fff_ffff_ffff_ffffn - 1n, -BigInt("0x8000000000000000"));
  print(-0x8000_0000_0000_0000n - 2n, -BigInt("0x8000000000000002"));
  print(-0x8000_0000_0000_0001n - 3n, -BigInt("0x8000000000000004"));

  
  print(0xffff_ffff_ffff_ffffn + 1n, BigInt("0x10000000000000000"));
  print(0x1_0000_0000_0000_0000n + 2n, BigInt("0x10000000000000002"));
`;
evalWithCache(test, {
  assertEqBytecode: true,
  assertEqResult : true
});
