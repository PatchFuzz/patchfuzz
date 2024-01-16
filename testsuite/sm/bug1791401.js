

oomTest(function() {
  var f = Function(`
    
    
    
    
    
    var False = [false, false][0];
    if (False) {
      for (let x;;) {
        
        Object(() => x);
      }
     }
  `);
  f();
});
