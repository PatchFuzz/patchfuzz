function* characters(...ranges) {
  for (let [start, end] of ranges) {
    for (let i = start; i <= end; ++i) {
      yield i;
    }
  }
}

const ascii = [...characters(
  [0x41, 0x5A], 
  [0x61, 0x7A], 
  [0x30, 0x39], 
)];

const latin1 = [...characters(
  [0xC0, 0xFF], 
)];

const twoByte = [...characters(
  [0x100, 0x17E], 
)];

String.prototype.toTitleCase = function() {
  "use strict";

  var s = String(this);

  if (s.length === 0) {
    return s;
  }
  return s[0].toUpperCase() + s.substring(1);
};

function toRope(s) {
  try {
    return newRope(s[0], s.substring(1));
  } catch {}
  
  
  return s;
}

for (let i = 0; i <= 32; ++i) {
  let strings = [ascii, latin1, twoByte].flatMap(codePoints => [
    String.fromCodePoint(...codePoints.slice(0, i)),

    
    "A" + String.fromCodePoint(...codePoints.slice(0, i)),

    
    "a" + String.fromCodePoint(...codePoints.slice(0, i)),

    
    "À" + String.fromCodePoint(...codePoints.slice(0, i)),

    
    "à" + String.fromCodePoint(...codePoints.slice(0, i)),

    
    "Ā" + String.fromCodePoint(...codePoints.slice(0, i)),

    
    "ā" + String.fromCodePoint(...codePoints.slice(0, i)),
  ]).flatMap(x => [
    x,
    toRope(x),
    newString(x, {twoByte: true}),
  ]);

  const expected = strings.map(x => {
    
    with ({}) ;
    return x.toTitleCase();
  });

  for (let i = 0; i < 1000; ++i) {
    let idx = i % strings.length;
    let str = strings[idx];

    let actual = str.toTitleCase();
    if (actual !== expected[idx]) throw new Error();
  }
}
