const strings = [
  "abcdef",
  "ABCDEF",
];

for (let i = 0; i < 500; ++i) {
  let str = strings[i & 1];

  for (let j = 0; j < 2; ++j) {
    
    let r = str.substring(j, j + 1);
    print(r, str.charAt(j));

    
    let s = str.substring(j, j + 2);
    print(s, str.charAt(j) + str.charAt(j + 1));
  }
}
