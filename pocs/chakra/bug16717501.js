function test0() {
  for (var vnlgev in [1 .__parent__ = '']) {
  }
  
  return 1518500249 in [];
}

for (let i = 0; i < 1000; ++i) {
  test0();
}

print("pass");
