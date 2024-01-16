













var asyncAssertsExpected = 0;

function assertAsyncRan() { ++asyncAssertsExpected }

function assertLater(f, name) {
  assertFalse(f()); 
  ++asyncAssertsExpected;
  var iterations = 0;
  function runAssertion() {
    if (f()) {
      print(name, "succeeded");
      --asyncAssertsExpected;
    } else if (iterations++ < 10) {
      %EnqueueMicrotask(runAssertion);
    } else {
      %AbortJS(name + " FAILED!");
    }
  }
  %EnqueueMicrotask(runAssertion);
}

function assertAsyncDone(iteration) {
  var iteration = iteration || 0;
  %EnqueueMicrotask(function() {
    if (asyncAssertsExpected === 0)
      assertAsync(true, "all")
    else if (iteration > 10)  
      assertAsync(false, "all... " + asyncAssertsExpected)
    else
      assertAsyncDone(iteration + 1)
  });
}



var y;
var x = Promise.resolve();
x.then = () => { y = true; }
Promise.resolve().then(() => x);
assertLater(() => y === true, "y === true");

assertAsyncDone();
