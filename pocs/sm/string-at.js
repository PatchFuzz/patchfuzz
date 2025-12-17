function* characters(...ranges) {
  for (let [start, end] of ranges) {
    for (let i = start; i <= end; ++i) {
      yield i;
    }
  }
}

const empty = [];

const ascii = [...characters(
  [0x41, 0x5A], 
  [0x61, 0x7A], 
)];

const latin1 = [...characters(
  [0xC0, 0xFF], 
)];

const twoByte = [...characters(
  [0x100, 0x17E], 
)];

function atomize(s) {
  return Object.keys({[s]: 0})[0];
}

function codePoints() {
  return [empty, ascii, latin1, twoByte];
}

function toRope(s) {
  
  if (s.length < 2) {
    return s;
  }
  if (s.length === 2) {
    return newRope(s[0], s[1]);
  }
  return newRope(s[0], s.substring(1));
}

function makeStrings() {
  let strings = codePoints()
  .map(codePoints => String.fromCodePoint(...codePoints))
  .flatMap(x => [
    x,
    toRope(x),
    newString(x, {twoByte: true}),
    atomize(x),
  ]);
  return strings;
}

function testNonNegativeIndexConstant() {
  let strings = makeStrings();
  for (let i = 0; i < 200; ++i) {
    let str = strings[i % strings.length];
    let index = 0;
    let ch = str.at(index);
    let expected = str.charAt(index);
    if (expected === "") expected = undefined;
    print(ch, expected);
  }
}
for (let i = 0; i < 2; ++i) {
  testNonNegativeIndexConstant();
}

function testNonNegativeIndex() {
  let strings = makeStrings();
  for (let i = 0; i < 200; ++i) {
    let str = strings[i % strings.length];
    let index = i & 3;
    let ch = str.at(index);
    let expected = str.charAt(index);
    if (expected === "") expected = undefined;
    print(ch, expected);
  }
}
for (let i = 0; i < 2; ++i) {
  testNonNegativeIndex();
}

function testNegativeIndexConstant() {
  let strings = makeStrings();
  for (let i = 0; i < 200; ++i) {
    let str = strings[i % strings.length];
    let index = -1;
    let ch = str.at(index);
    let expected = str.charAt(str.length + index);
    if (expected === "") expected = undefined;
    print(ch, expected);
  }
}
for (let i = 0; i < 2; ++i) {
  testNegativeIndexConstant();
}

function testNegativeIndex() {
  let strings = makeStrings();
  for (let i = 0; i < 200; ++i) {
    let str = strings[i % strings.length];
    let index = -(i & 3) - 1;
    let ch = str.at(index);
    let expected = str.charAt(str.length + index);
    if (expected === "") expected = undefined;
    print(ch, expected);
  }
}
for (let i = 0; i < 2; ++i) {
  testNegativeIndex();
}

function testAbsentIndex() {
  let strings = makeStrings();
  for (let i = 0; i < 200; ++i) {
    let str = strings[i % strings.length];
    let index = 0;
    let ch = str.at();
    let expected = str.charAt(index);
    if (expected === "") expected = undefined;
    print(ch, expected);
  }
}
for (let i = 0; i < 2; ++i) {
  testAbsentIndex();
}
