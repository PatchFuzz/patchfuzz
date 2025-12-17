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

function toRope(s) {
  try {
    return newRope(s[0], s.substring(1));
  } catch {}
  
  
  return s;
}

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
    toRope(x),
    newString(x, {twoByte: true}),
    atomize(x),
  ]);

  
  const stringsPerLoop = 4;

  for (let codePoints of [ascii, latin1, twoByte]) {
    let str = String.fromCodePoint(...codePoints.slice(0, i));

    for (let i = 0; i < strings.length; i += stringsPerLoop) {
      let fn = Function("strings", `
        var obj = {["${str}"]: 0};

        for (let i = 0; i < 250; ++i) {
          let idx = i % strings.length;
          let str = strings[idx];
      
          let actual = str in obj;
          let expected = str === "${str}";
          if (actual !== expected) throw new Error();
        }
      `);
      fn(strings.slice(i, stringsPerLoop));
    }
  }
}
