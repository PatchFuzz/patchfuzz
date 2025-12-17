function literals_sharing_test(warmup, optimize) {
  function closure() {
    
    print(%HasSmiElements([]));
    print(%HasSmiElements([1]));
    print(%HasSmiElements([1, 2]));
    print(%HasDoubleElements([1.1]));
    print(%HasDoubleElements([1.1, 2]));

    var a = [1, 2, 3];
    if (warmup) {
      
      print(%HasSmiElements(a));
      print(4, a.push(1.3));
    }
    
    
    print(%HasDoubleElements(a));
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
