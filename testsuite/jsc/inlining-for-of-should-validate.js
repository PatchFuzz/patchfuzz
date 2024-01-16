

function bar() {
  foo();
}

function foo() {
  let p = new Proxy({}, {isExtensible: bar});
  Object.isSealed(p);
  for (let z of []) {}
}

try {
    
    foo();
} catch { }
