






























if (isNeverOptimizeLiteMode()) {
  print("Warning: skipping test that requires optimization in Lite mode.");
  testRunner.quit(0);
}
assertFalse(isAlwaysOptimize());

function f(disable_asserts) {
  do {
    do {
      for (var i = 0; i < 10; i++) {
        %OptimizeOsr();
        %PrepareFunctionForOptimization(f);
      }
      
      
      
      var opt_status = %GetOptimizationStatus(f);
      assertTrue(
        disable_asserts ||
        (opt_status & V8OptimizationStatus.kMaybeDeopted) !== 0 ||
        (opt_status & V8OptimizationStatus.kTopmostFrameIsTurboFanned) !== 0);
    } while (false);
  } while (false);
}

%PrepareFunctionForOptimization(f);
f(true);  
f(false);

function g() {
  for (var i = 0; i < 1; i++) { }

  do {
    do {
      for (var i = 0; i < 1; i++) { }
    } while (false);
  } while (false);

  do {
    do {
      do {
        do {
          do {
            do {
              do {
                do {
                  for (var i = 0; i < 10; i++) {
                    %OptimizeOsr();
                    %PrepareFunctionForOptimization(g);
                  }
                  var opt_status = %GetOptimizationStatus(g);
                  assertTrue(
                    (opt_status & V8OptimizationStatus.kMaybeDeopted) !== 0 ||
                    (opt_status &
                        V8OptimizationStatus.kTopmostFrameIsTurboFanned) !== 0);
                } while (false);
              } while (false);
            } while (false);
          } while (false);
        } while (false);
      } while (false);
    } while (false);
  } while (false);
}

%PrepareFunctionForOptimization(g);
g();
