function test() {
  for (let i = 0; i < 0xffff; ++i) {
    let expected = String.fromCharCode(i);

    
    print(String.fromCharCode(i + 0.5), expected);

    
    print(String.fromCharCode(i + 0.5 + 0x10_000), expected);

    
    print(String.fromCharCode(i + 0x8000_0000), expected);
  }
}
for (let i = 0; i < 2; ++i) test();
