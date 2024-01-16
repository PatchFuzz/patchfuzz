

function TypeOf(thing) {
  switch (typeof thing) {
  case "undefined":
    return "undefined";
  case "object":
    return "object";
  case "function":
    return "function";
  case "string":
    return "string";
  case "number":
    return "number";
  case "boolean":
    return "boolean";
  case "symbol":
    return "symbol";
  case "bigint":
    return "bigint";
  case "bad":
    return "bad";
  }
  return "bad2";
}

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

  for (let i = 0; i < 500; ++i) {
    let x = xs[i % xs.length];
    assertEq(TypeOf(x), typeof x);
  }
}
for (let i = 0; i < 2; ++i) test();
