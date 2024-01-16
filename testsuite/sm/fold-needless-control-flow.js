function test(str, needle) {
  
  
  (str.indexOf(needle) > -1) && needle;
}

const needles = [
  "a", "b",
];

for (let i = 0; i < 100; ++i) {
  test("aaa", needles[i & 1]);
}
