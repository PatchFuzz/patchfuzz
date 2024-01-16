

function* characters(...ranges) {
  for (let [start, end] of ranges) {
    for (let i = start; i <= end; ++i) {
      yield i;
    }
  }
}

const ascii_upper = [...characters(
  [0x41, 0x5A], 
  [0x30, 0x39], 
)];

const ascii_lower = [...characters(
  [0x61, 0x7A], 
  [0x30, 0x39], 
)];

const latin1_upper = [...characters(
  [0xC0, 0xDE], 
  [0x30, 0x39], 
)];

const latin1_lower = [...characters(
  [0xDF, 0xFF], 
)];

for (let upper of [ascii_upper, latin1_upper]) {
  let s = String.fromCodePoint(...upper);
  assertEq(isLatin1(s), true);
  assertEq(s, s.toUpperCase());
}

for (let lower of [ascii_lower, latin1_lower]) {
  let s = String.fromCodePoint(...lower);
  assertEq(isLatin1(s), true);
  assertEq(s, s.toLowerCase());
}

for (let i = 0; i <= 32; ++i) {
  let strings = [ascii_upper, ascii_lower, latin1_upper, latin1_lower].flatMap(codePoints => [
    String.fromCodePoint(...codePoints.slice(0, i)),

    
    String.fromCodePoint(...codePoints.slice(0, i)) + "A",

    
    String.fromCodePoint(...codePoints.slice(0, i)) + "a",

    
    String.fromCodePoint(...codePoints.slice(0, i)) + "À",

    
    String.fromCodePoint(...codePoints.slice(0, i)) + "ß",
  ]).flatMap(x => [
    x,
    newRope(x, ""),
    newString(x, {twoByte: true}),
  ]);

  const expected = strings.map(x => {
    
    with ({}) ;
    return x.toLowerCase();
  });

  for (let i = 0; i < 1000; ++i) {
    let idx = i % strings.length;
    let str = strings[idx];

    let actual = str.toLowerCase();
    if (actual !== expected[idx]) throw new Error();
  }
}
