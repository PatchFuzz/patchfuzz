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

function emptyFunctionToCheckInterruptState() {
  
  with ({}) ;
}

for (var v of iterator) {
  
  interruptIf(true);

  
  emptyFunctionToCheckInterruptState();

  
  
  break;
}
