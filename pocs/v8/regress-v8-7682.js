const impl = Symbol();
class MyArrayLike {
  constructor() {
    this[impl] = [2, 1];
    Object.freeze(this);
  }
  get 0() { return this[impl][0]; }
  set 0(value) { this[impl][0] = value; }
  get 1() { return this[impl][1]; }
  set 1(value) { this[impl][1] = value; }
  get length() { return 2; }
}

const xs = new MyArrayLike();
Array.prototype.sort.call(xs);





print(1, xs[0]);
print(2, xs[1]);
