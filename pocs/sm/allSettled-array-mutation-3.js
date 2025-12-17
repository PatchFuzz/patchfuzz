let called = 0;
let functions = [];
class CustomPromise {
  constructor(executor) {
    executor(changeArray, changeArray);
  }
  static resolve() {
    return {
      then: (fulfill, reject) => {
        functions.push(fulfill, reject);
      }
    };
  }
};
function changeArray(result) {
  called++;
  print(result.length, 4);
  result.length = 0;
}
Promise.allSettled.call(CustomPromise, [0, 0, 0, 0]);
print(functions.length, 8);
functions.forEach(f => f());
functions.forEach(f => f());
print(called, 1);
