if (isNeverOptimizeLiteMode()) {
  print("Warning: skipping test that requires optimization in Lite mode.");
  quit(0);
}

function f(disable_asserts) {
  do {
    do {
      for (var i = 0; i < 10; i++) {
        %OptimizeOsr();
        %PrepareFunctionForOptimization(f);
      }
      
      
      
      var opt_status = %GetOptimizationStatus(f);
      print(
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
                  print(
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
