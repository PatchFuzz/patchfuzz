





function literals_sharing_test(warmup, optimize) {
  function closure() {
    
    assertTrue(%HasSmiElements([]));
    assertTrue(%HasSmiElements([1]));
    assertTrue(%HasSmiElements([1, 2]));
    assertTrue(%HasDoubleElements([1.1]));
    assertTrue(%HasDoubleElements([1.1, 2]));

    var a = [1, 2, 3];
    if (warmup) {
      
      assertTrue(%HasSmiElements(a));
      assertEquals(4, a.push(1.3));
    }
    
    
    assertTrue(%HasDoubleElements(a));
  };
  %PrepareFunctionForOptimization(closure);
  ;
  %EnsureFeedbackVectorForFunction(closure);
  if (optimize) %OptimizeFunctionOnNextCall(closure);
  closure();
}


function test() {
  var warmup = true;
  for (var i = 0; i < 3; i++) {
    print('iter: ' + i + ', warmup: ' + warmup);
    literals_sharing_test(warmup, false);
    warmup = false;
  }
  print("iter: " + i + ", opt: true");
  literals_sharing_test(warmup, true);
}

test();
