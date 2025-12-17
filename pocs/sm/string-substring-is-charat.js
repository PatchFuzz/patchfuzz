const strings = [
  "",
  "a", "b",
  "ab", "ba",
];

for (let i = 0; i < 1000; ++i) {
  let str = strings[i % strings.length];

  print(str.substring(0, 1), str.charAt(0));
}
