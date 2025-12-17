var asyncAssertsExpected = 0;

function print() { ++asyncAssertsExpected }

function print(f, name) {
  print(f()); 
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

function print(iteration) {
  var iteration = iteration || 0;
  %EnqueueMicrotask(function() {
    if (asyncAssertsExpected === 0)
      print(true, "all")
    else if (iteration > 10)  
      print(false, "all... " + asyncAssertsExpected)
    else
      print(iteration + 1)
  });
}



var y;
var x = Promise.resolve();
x.then = () => { y = true; }
Promise.resolve().then(() => x);
print(() => y === true, "y === true");

print();
