

var symbolFoo = Symbol ('foo');
var symbolBar = Symbol ('bar');

var obj = {
  _a : 5,
  get [symbolFoo]() {
    return this._a;
  },
  set [symbolFoo](a) {
    this._a = a;
  },
  [symbolBar] : 10
}


assert (obj[symbolFoo] === 5);
obj[symbolFoo] = 6;
assert (obj[symbolFoo] === 6);


assert (obj[symbolBar] === 10);
obj[symbolBar] = 20;
assert (obj[symbolBar] === 20);
