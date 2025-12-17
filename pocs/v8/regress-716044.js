class Array1 extends Array {
  constructor(len) {
      super(1);
    }
};

class MyArray extends Array {
  static get [Symbol.species]() {
      return Array1;
    }
}

a = new MyArray();

for (var i = 0; i < 100000; i++) {
  a.push(1);
}

a.map(function(x) { return 42; });
