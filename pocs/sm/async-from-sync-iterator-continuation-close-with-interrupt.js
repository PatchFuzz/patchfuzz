let p = Promise.resolve(0);


Object.defineProperty(p, "constructor", {
  get() {
    
    interruptIf(true);
    return Promise;
  }
});

setInterruptCallback(function() {
  
  return false;
});

var iterator = {
  [Symbol.iterator]() {
    return this;
  },
  next() {
    return {value: p, done: false};
  },
  return() {
    throw "bad error";
  },
};

async function f() {
  for await (let v of iterator) {}
}

f();
