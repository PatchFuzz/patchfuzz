function test() {
  Object.defineProperty(Array.prototype, -1, {
    set() {
      throw new Error("shouldn't get here");
    }
  });

  
  var indices = [];
  for (var i = 0; i < 10_000; ++i) indices.push(i);

  
  indices.push(-1);

  
  var desc = {value: 0, writable: true, enumerable: true, configurable: true};

  var a = [];
  for (var i = 0; i < indices.length; ++i) {
    Object.defineProperty(a, indices[i], desc);
  }
}

test();
