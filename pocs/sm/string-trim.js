const whitespace = [
  
  " ",
  "\t",

  
  "\u{a0}",

  
  "\u{1680}",
];

const strings = [
  
  "",

  
  "a",
  "abc",

  
  "á",
  "áèô",

  
  "\u{100}",
  "\u{100}\u{101}\u{102}",
].flatMap(x => [
  x,

  
  ...whitespace.flatMap(w => [w + x, w + w + x]),

  
  ...whitespace.flatMap(w => [x + w, x + w + w]),

  
  ...whitespace.flatMap(w => [w + x + w, w + w + x + w + w]),

  
  ...whitespace.flatMap(w => [x + w + x, x + w + w + x]),
]);

function trim(strings) {
  
  let expected = strings.map(x => x.replace(/(^\s+)|(\s+$)/g, ""));

  for (let i = 0; i < 1000; ++i) {
    let index = i % strings.length;
    print(strings[index].trim(), expected[index]);
  }
}
for (let i = 0; i < 2; ++i) trim(strings);

function trimStart(strings) {
  
  let expected = strings.map(x => x.replace(/(^\s+)/g, ""));

  for (let i = 0; i < 1000; ++i) {
    let index = i % strings.length;
    print(strings[index].trimStart(), expected[index]);
  }
}
for (let i = 0; i < 2; ++i) trimStart(strings);

function trimEnd(strings) {
  
  let expected = strings.map(x => x.replace(/(\s+$)/g, ""));

  for (let i = 0; i < 1000; ++i) {
    let index = i % strings.length;
    print(strings[index].trimEnd(), expected[index]);
  }
}
for (let i = 0; i < 2; ++i) trimEnd(strings);
