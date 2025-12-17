"use strict";









function print(actual, expected, message) {
  
  
  
  
  
  
  let actualOps =
      actual.split('\n')
      .map(s => /^\d{5}: +\d+ +(.*)$/.exec(s)?.[1])
      .filter(x => x !== undefined);

  
  let expectedOps =
      expected.split(';')
      .map(s => {
        s = s.trim();
        
        
        if (/^\w+$/.test(s)) {
          s += "\\b";
        }
        return new RegExp("^" + s);
      });

  
  
  
  for (let i = 0; i + expectedOps.length <= actualOps.length; i++) {
    if (expectedOps.every((expectRegExp, j) => expectRegExp.test(actualOps[i + j]))) {
      
      return;
    }
  }
  throw new Error(`Assertion failed: ${message}\nexpected ${uneval(expected)}, got:\n${actual}`);
}




var bytecode;


eval(`
  var pet = "ostrich";
  bytecode = disassemble();
  pet
`);
print(globalThis.hasOwnProperty('pet'), false);
print(bytecode, 'String "ostrich"; SetLocal; Pop',
               "`pet` is stored in a stack local");
print(bytecode, "GetLocal; SetRval; RetRval",
               "`pet` is loaded from the local at the end of the eval code");


eval(`
  function banana() { return "potassium"; }
  bytecode = disassemble();
`);
print(globalThis.hasOwnProperty('banana'), false);
print(bytecode, 'Lambda .* banana; SetLocal; Pop',
               "`banana` is stored in a stack local");


eval(`
  let a = "ushiko-san";
  const b = "umao-san";
  bytecode = disassemble();
  [a, b]
`);
print(bytecode, 'String "ushiko-san"; InitLexical; Pop',
               "`let a` is stored in a stack local");
print(bytecode, 'String "umao-san"; InitLexical; Pop',
               "`const b` is stored in a stack local");
print(bytecode, 'GetLocal .* a$; InitElemArray; GetLocal .* b$; InitElemArray',
               "lexical variables are loaded from stack locals");


let g = eval(`
  function f(a) {
    let x = 'x';
    function g(b) {
      let y = "wye";
      return [f, a, x, g, b, y];
    }
    return g;
  }
  f();
`);
bytecode = disassemble(g);
print(bytecode, 'GetAliasedVar "f"',
               "closed-over eval-scope `function` is accessed via aliased op");
print(bytecode, 'GetAliasedVar "a"',
               "closed-over argument is accessed via aliased op");
print(bytecode, 'GetAliasedVar "x"',
               "closed-over local `let` variable is accessed via aliased op");
print(bytecode, 'GetAliasedVar "g"',
               "closed-over local `function` is accessed via aliased op");
print(bytecode, 'GetArg .* b$',
               "non-closed-over arguments are optimized");
print(bytecode, 'GetLocal .* y$',
               "non-closed-over locals are optimized");


var fac = eval(`
  bytecode = disassemble();
  function fac(x) { return x <= 1 ? 1 : x * fac(x - 1); }
  fac
`);
print(bytecode, 'SetAliasedVar "fac"',
               "strict eval code accesses closed-over top-level function using aliased ops");
print(disassemble(fac), 'GetAliasedVar "fac"',
               "function in strict eval accesses itself using aliased ops");


let obj = {
  m(s) { return eval(s); }
};
let result = obj.m(`
  bytecode = disassemble();
  this;
`);
print(result, obj);
print(bytecode, 'GetAliasedVar ".this"',
               "strict eval in a method can access `this` using aliased ops");


function fn_with_args() {
  return eval(`
    bytecode = disassemble();
    arguments[0];
  `);
}
print(fn_with_args(117), 117);
print(bytecode, 'GetAliasedVar "arguments"',
               "strict eval in a function can access `arguments` using aliased ops");


result = eval(`
  bytecode = disassemble();
  fn_with_args;
`);
print(result, fn_with_args);
print(bytecode, 'GetGName "fn_with_args"',
               "strict eval code can optimize access to globals");


function test_globals_in_function() {
  result = eval(`
    bytecode = disassemble();
    fn_with_args;
  `);
  print(result, fn_with_args);
  print(bytecode, 'GetGName "fn_with_args"',
                 "strict eval code in a function can optimize access to globals");
}
test_globals_in_function();


{
  let outer = "outer";
  const f = function (code, a, b) {
    return eval(code);
  };
  let result = f(`
    eval("bytecode = disassemble();\\n" +
         "outer += a + b;\\n");
  `, 3, 4);
  print(outer, "outer7");
  print(bytecode, 'GetAliasedVar "outer"',
                 "access to outer bindings is optimized even through nested strict evals");
  print(bytecode, 'GetAliasedVar "a"',
                 "access to outer bindings is optimized even through nested strict evals");
  print(bytecode, 'SetAliasedVar "outer"',
                 "assignment to outer bindings is optimized even through nested strict evals");
}


{
  const doNotSetMe = "i already have a value, thx";
  let f = eval(`() => { doNotSetMe = 34; }`);
  print(disassemble(f), 'ThrowSetConst "doNotSetMe"',
                 "assignment to outer const in strict eval code emits ThrowSetConst");
}



{
  let stashed;
  (class C {
    [(
      eval(`
        var secret = () => C;
        stashed = () => secret;
      `),
      "method"
    )]() {
      return "ok";
    }
  });

  bytecode = disassemble(stashed());
  print(bytecode, 'GetAliasedVar "C"',
                 "access to class name uses aliased ops");
  let C = stashed()();
  print(new C().method(), "ok");
}

