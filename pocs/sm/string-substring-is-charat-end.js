const strings = [
  "",
  "a", "b",
  "ab", "ba",
];

for (let i = 0; i < 1000; ++i) {
  let str = strings[i % strings.length];

  print(str.slice(-1), str.charAt(str.length - 1));
  print(str.substr(-1), str.charAt(str.length - 1));
}
