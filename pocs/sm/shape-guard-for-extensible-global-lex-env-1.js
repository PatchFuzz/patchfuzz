this.a = 0;

function f(y) {
  
  
  eval("");

  {
    
    let w = y;

    function g() {
      
      
      
      
      
      
      
      
      
      a += w;
    }

    for (var i = 0; i < 150; ++i) {
      
      
      if (i === 100) {
        evaluate("let a = 1000");
      }
      g();
    }

    print(a, 1050);
    print(globalThis.a, 100);
  }
}
f(1);
