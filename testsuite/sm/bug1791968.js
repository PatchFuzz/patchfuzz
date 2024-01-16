function opaqueThrow() { with ({}) {} throw 3; }

function* foo(n) {
  try {
    
    opaqueThrow();
  } catch(v12) {
    
    yield 1;
  } finally {
    
    
    for (let i = 0; i < 100; i++) { }

    
    var x = Math.pow(1,n);

    
    
    
    
  }
}

for (let i = 0; i < 30; i++) {
  let gen = foo(1);

  
  gen.next();

  
  gen.return();
}
