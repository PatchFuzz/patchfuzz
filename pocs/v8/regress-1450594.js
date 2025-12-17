function maybe_throw() {}
%NeverOptimizeFunction(maybe_throw);

function with_merge_after_try_catch() {
  var x;
  var inner = function () {
    
    x = "foo";
  };
  %PrepareFunctionForOptimization(inner);

  try {
    
    maybe_throw();
  } catch (e) {}

  
  
  

  x = "bar"; 
  inner();   
  return x;  
};
%PrepareFunctionForOptimization(with_merge_after_try_catch);
print("foo", with_merge_after_try_catch());
print("foo", with_merge_after_try_catch());
%OptimizeFunctionOnNextCall(with_merge_after_try_catch);
print("foo", with_merge_after_try_catch());

async function with_merge_after_try_catch_that_has_await() {
  var x;
  var inner = function () {
    
    x = "foo";
  };
  %PrepareFunctionForOptimization(inner);

  try {
    
    maybe_throw();
  } catch (e) {
    
    
    await 0;
  }

  
  
  
  

  x = "bar"; 
  inner();   
  return x;  
};

(async function () {
  %PrepareFunctionForOptimization(with_merge_after_try_catch_that_has_await);
  print("foo", await with_merge_after_try_catch_that_has_await());
  print("foo", await with_merge_after_try_catch_that_has_await());
  %OptimizeFunctionOnNextCall(with_merge_after_try_catch_that_has_await);
  print("foo", await with_merge_after_try_catch_that_has_await());
})()


function with_inner_mixed_context_return(return_inside_block) {
  function inner() {
    {
      
      let x = 5;
      let inner = function () { x; };
      
      if (return_inside_block) return 1;
    }
    
    return 2;
  }
  %PrepareFunctionForOptimization(inner);

  
  
  
  return inner();
};
%PrepareFunctionForOptimization(with_inner_mixed_context_return);
print(1, with_inner_mixed_context_return(true));
print(2, with_inner_mixed_context_return(false));
%OptimizeFunctionOnNextCall(with_inner_mixed_context_return);
print(1, with_inner_mixed_context_return(true));
print(2, with_inner_mixed_context_return(false));
