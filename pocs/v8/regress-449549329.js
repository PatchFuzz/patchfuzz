class Iterator1 {
  get next() {
    return () => ({ done: true });
  }
}
class Iterator2 {
  get next() {
    return () => ({ done: true });
  }
}


const iterable1 = {
  [Symbol.iterator]() {
    return new Iterator1();
  },
};
const iterable2 = {
  [Symbol.iterator]() {
    return new Iterator2();
  },
};


function foo(iterable) {
  for (const x of iterable) {
    return x;
  }
}




%PrepareFunctionForOptimization(foo);
foo(iterable1);
foo(iterable2);




%OptimizeMaglevOnNextCall(foo);
foo(iterable1);
