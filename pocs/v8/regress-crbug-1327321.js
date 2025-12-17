for (let o of [{0b0n: 0}, {0B0n: 1},
               {0o0n: 2}, {0O0n: 3},
               {0x0n: 4}, {0X0n: 5},
               {0n: 6}]) {
  print("0", Object.getOwnPropertyNames(o)[0]);
}
