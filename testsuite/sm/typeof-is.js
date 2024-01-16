




function createFunctions() {
  return [
    "undefined",
    "object",
    "function",
    "string",
    "number",
    "boolean",
    "symbol",
    "bigint",
    "bad",
  ].flatMap(type => [
    "==",
    "===",
    "!=",
    "!=="
  ].map(op => ({
    type,
    equal: op[0] === "=",
    fn: Function("thing", `return typeof thing ${op} "${type}"`)
  })));
}

let functions = createFunctions();

function test() {
  const ccwGlobal = newGlobal({newCompartment: true});
  const xs = [
    
    
    undefined,
    createIsHTMLDDA(),
    wrapWithProto(createIsHTMLDDA(), null),
    ccwGlobal.eval("createIsHTMLDDA()"),

    
    
    {},
    this,
    new Proxy({}, {}),
    wrapWithProto({}, null),
    transplantableObject({proxy: true}).object,
    ccwGlobal.Object(),

    
    
    function(){},
    new Proxy(function(){}, {}),
    new Proxy(createIsHTMLDDA(), {}),
    wrapWithProto(function(){}, null),
    ccwGlobal.Function(),

    
    "",

    
    
    0,
    1.23,

    
    true,

    
    Symbol(),

    
    0n,
  ];

  for (let i = 0; i < 200; ++i) {
    let x = xs[i % xs.length];
    for (let {type, equal, fn} of functions) {
      assertEq(fn(x), (typeof x === type) === equal);
    }
  }
}
for (let i = 0; i < 2; ++i) test();


let functionsObject = createFunctions();


function testObject() {
  const ccwGlobal = newGlobal({newCompartment: true});

  
  
  const xs = [
    
    
    createIsHTMLDDA(),
    wrapWithProto(createIsHTMLDDA(), null),
    ccwGlobal.eval("createIsHTMLDDA()"),

    
    
    {},
    this,
    new Proxy({}, {}),
    wrapWithProto({}, null),
    transplantableObject({proxy: true}).object,
    ccwGlobal.Object(),

    
    
    function(){},
    new Proxy(function(){}, {}),
    new Proxy(createIsHTMLDDA(), {}),
    wrapWithProto(function(){}, null),
    ccwGlobal.Function(),
  ];

  for (let i = 0; i < 200; ++i) {
    let x = xs[i % xs.length];
    for (let {type, equal, fn} of functionsObject) {
      assertEq(fn(x), (typeof x === type) === equal);
    }
  }
}
for (let i = 0; i < 2; ++i) testObject();
