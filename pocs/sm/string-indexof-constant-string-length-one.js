const strings = [
  
  "",

  
  "abcdefgh",

  
  "\u{101}\u{102}\u{103}\u{104}\u{105}\u{106}\u{107}\u{108}",
].flatMap(x => [
  x,

  
  "!".repeat(10) + x,

  
  x + "!".repeat(10),
]).flatMap(x => [
  x,

  
  newString(x, {twoByte: true}),
]);

const searchStrings = [
  
  
  "a",
  
  "d",
  
  "h",
  
  "z",

  
  
  "\u{101}",
  
  "\u{104}",
  
  "\u{108}",
  
  "\u{1000}",
];

const stringFunctions = [
  "indexOf",
  "lastIndexOf",
  "includes",
];

for (let stringFunction of stringFunctions) {
  for (let searchString of searchStrings) {
    let fn = Function("strings", `
      const expected = strings.map(x => {
        
        with ({}) ;
        return x.${stringFunction}("${searchString}");
      });

      for (let i = 0; i < 500; ++i) {
        let idx = i % strings.length;
        let str = strings[idx];

        let actual = str.${stringFunction}("${searchString}");
        print(actual, expected[idx]);
      }
    `);
    fn(strings);
  }
}
