




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

function atomize(s) {
  return Object.keys({[s]: 0})[0];
}

for (let i = 1; i <= 32; ++i) {
  let strings = [ascii, latin1, twoByte].flatMap(codePoints => [
    
    String.fromCodePoint(...codePoints.slice(0, i)),

    
    String.fromCodePoint(...codePoints.slice(1, i + 1)),

    
    String.fromCodePoint(...codePoints.slice(0, i - 1)),

    
    String.fromCodePoint(...codePoints.slice(0, i + 1)),
  ]).flatMap(x => [
    x,
    newRope(x, ""),
    newString(x, {twoByte: true}),
    atomize(x),
  ]);

  for (let codePoints of [ascii, latin1, twoByte]) {
    let str = String.fromCodePoint(...codePoints.slice(0, i));

    let fn = Function("strings", `
      const expected = strings.map(x => {
        
        with ({}) ;
        return x.endsWith("${str}");
      });

      for (let i = 0; i < 250; ++i) {
        let idx = i % strings.length;
        let str = strings[idx];

        let actual = str.endsWith("${str}");
        if (actual !== expected[idx]) throw new Error();
      }
    `);
    fn(strings);
  }
}
