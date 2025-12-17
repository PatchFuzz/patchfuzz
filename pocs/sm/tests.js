let resolved = false;
Promise.resolve(42).then(value => {
  print(value, 42);
  resolved = true;
});
print(resolved, false); 
drainJobQueue();
print(resolved, true); 


let rejected = false;
let rejectionValue = null;
Promise.reject("error").catch(err => {
  rejectionValue = err;
  rejected = true;
});
drainJobQueue();
print(rejected, true);
print(rejectionValue, "error");


let chainResult = [];
Promise.resolve(1)
  .then(x => {
    chainResult.push(x);
    return x + 1;
  })
  .then(x => {
    chainResult.push(x);
    return x * 2;
  })
  .then(x => {
    chainResult.push(x);
  });
drainJobQueue();
print(chainResult.length, 3);
print(chainResult[0], 1);
print(chainResult[1], 2);
print(chainResult[2], 4);


let results = [];
Promise.resolve("A").then(x => results.push(x));
Promise.resolve("B").then(x => results.push(x));
Promise.resolve("C").then(x => results.push(x));
drainJobQueue();
print(results.length, 3);
print(results.includes("A"), true);
print(results.includes("B"), true);
print(results.includes("C"), true);


let allResolved = false;
let allResults = null;
Promise.all([
  Promise.resolve(10),
  Promise.resolve(20),
  Promise.resolve(30)
]).then(values => {
  allResults = values;
  allResolved = true;
});
drainJobQueue();
print(allResolved, true);
print(allResults.length, 3);
print(allResults[0], 10);
print(allResults[1], 20);
print(allResults[2], 30);


let raceWinner = null;
Promise.race([
  Promise.resolve("first"),
  Promise.resolve("second")
]).then(winner => {
  raceWinner = winner;
});
drainJobQueue();
print(raceWinner, "first");


let executionOrder = [];
executionOrder.push("sync1");
Promise.resolve().then(() => executionOrder.push("async1"));
executionOrder.push("sync2");
Promise.resolve().then(() => executionOrder.push("async2"));
executionOrder.push("sync3");
drainJobQueue();
print(executionOrder[0], "sync1");
print(executionOrder[1], "sync2");
print(executionOrder[2], "sync3");
print(executionOrder[3], "async1");
print(executionOrder[4], "async2");


let nestedResults = [];
Promise.resolve().then(() => {
  nestedResults.push("outer");
  Promise.resolve().then(() => {
    nestedResults.push("inner");
  });
});
drainJobQueue();
print(nestedResults.length, 2);
print(nestedResults[0], "outer");
print(nestedResults[1], "inner");


let errorCaught = false;
let errorMessage = null;
Promise.resolve()
  .then(() => {
    throw new Error("test error");
  })
  .catch(e => {
    errorCaught = true;
    errorMessage = e.message;
  });
drainJobQueue();
print(errorCaught, true);
print(errorMessage, "test error");


let constructorExecuted = false;
let constructorResolve = null;
new Promise((resolve, reject) => {
  constructorExecuted = true;
  constructorResolve = resolve;
});
print(constructorExecuted, true);
