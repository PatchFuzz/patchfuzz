let called = 0;
let fulfillFunction;
let rejectFunction;
class CustomPromise {
  constructor(executor) {
    executor(changeArray, changeArray);
  }
  static resolve() {
    return {
      then: (fulfill, reject) => {
        fulfillFunction = fulfill;
        rejectFunction = reject;
      }
    };
  }
};
function changeArray(result) {
  called++;
  print(result.length, 1);
  result[0] = undefined;
}
Promise.allSettled.call(CustomPromise, [0]);
rejectFunction();
fulfillFunction();
print(called, 1);
