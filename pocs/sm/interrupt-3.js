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
    
    print("iterator return");
  },
};

function emptyFunctionToCheckInterruptState() {
  
  with ({}) ;
}

class P extends Promise {
  static resolve(v) {
    
    interruptIf(true);

    emptyFunctionToCheckInterruptState();

    return {
      then() {
        
        print("then called");
      }
    };
  }
}





Promise.any.call(P, iterator);
