setInterruptCallback(function() {
  
  return false;
});

var iterator = {
  [Symbol.iterator]() {
    return this;
  },
  next() {
    return {value: null, done: false};
  },
  return() {
    
    print("unexpected call to return method");
  },
};

for (var v of iterator) {
  
  interruptIf(true);

  
  
  throw new Error("exception in for-of loop");
}
