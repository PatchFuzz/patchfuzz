



function test() {
  
  const args = new Array(65535);
  function* gen() {}
  const c = gen.constructor.apply(null, args);

  
  
  
  
  c();
  c();
}

test();
