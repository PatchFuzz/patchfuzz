(function testMaybeAssignedWithShadowing() {

  function foo() {
    let a = 0;
    let g;

    with ({}) {
      g = function g() {
        
        ++a;
      }
      
      a;
    }

    return function () {
      
      
      g(a);
      return a;
    }
  };

  f = foo();
  %PrepareFunctionForOptimization(f);
  print(f(), 1);
  print(f(), 2);
  %OptimizeFunctionOnNextCall(f);
  print(f(), 3);

})();



(function testMaybeAssignedWithDeeplyNestedShadowing() {

  function foo() {
    let a = 0;
    let g;

    
    with ({}) {
      with ({}) {
        with ({}) {
          with ({}) {
            with ({}) {
              g = function g() { ++a; }
              
              a;
            }
            
            a;
          }
          
        }
        
      }
      
      a;
    }

    return function () {
      
      
      g(a);
      return a;
    }
  };

  f = foo();
  %PrepareFunctionForOptimization(f);
  print(f(), 1);
  print(f(), 2);
  %OptimizeFunctionOnNextCall(f);
  print(f(), 3);

})();
