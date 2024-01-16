





var proxy = new Proxy([], {
  defineProperty() {
    w.length = 1;  
    gc();          
    return Object.defineProperty.apply(this, arguments);
  }
});

class MyArray extends Array {
  
  static get[Symbol.species](){
    return function() {
      return proxy;
    }
  };
}

var w = new MyArray(100);
w[1] = 0.1;
w[2] = 0.1;

var result = Array.prototype.concat.call(w);

assertEquals(undefined, result[0]);
assertEquals(0.1, result[1]);

for (var i = 2; i < 200; i++) {
  assertEquals(undefined, result[i]);
}
