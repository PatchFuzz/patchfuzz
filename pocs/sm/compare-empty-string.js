const strings = [
  
  "",

  
  newString("", {external: true}),

  
  "a",
  "ä",
  "monkey",

  
  "猿",
  "🐒",
  newString("monkey", {twoByte: true}),
];

const operators = [
  "==", "===", "!=", "!==",
  "<", "<=", ">=", ">",
];

for (let op of operators) {
  let lhs = x => `${x} ${op} ""`;
  let rhs = x => `"" ${op} ${x}`;

  for (let input of [lhs, rhs]) {
    let fn = Function("strings", `
      const expected = strings.map(x => {
        
        with ({}) ;
        return ${input("x")};
      });

      for (let i = 0; i < 200; ++i) {
        let idx = i % strings.length;
        let str = strings[idx];
        let res = ${input("str")};
        print(res, expected[idx]);
      }
    `);
    fn(strings);
  }
}
