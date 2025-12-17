var iter = {
  [Symbol.iterator]() { return this; },
  next() { return {done: false}; },
  return() {
    
    this.f();

    return {done: true};
  },
};

class C extends class {} {
  constructor() {
    iter.f = () => super();

    for (var k of iter) {
      return;
    }
  }
}

function test() {
  for (var i = 0; i < 100; ++i) {
    
    new C();
  }
}

test();
