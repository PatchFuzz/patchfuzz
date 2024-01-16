








class MyException extends Error { }
class NoDefinePropertyArray extends Array {
  constructor(...args) {
    super(...args);
    return new Proxy(this, {
      defineProperty() { throw new MyException(); }
    });
  }
}
assertThrows(() => new NoDefinePropertyArray().concat([1]), MyException);


class ZeroGetterArray extends Array { get 0() {} };
assertArrayEquals([1], new ZeroGetterArray().concat(1));



class FrozenArray extends Array {
  constructor(...args) { super(...args); Object.freeze(this); }
}
assertThrows(() => new FrozenArray().concat([1]), TypeError);


class ZeroFrozenArray extends Array {
  constructor(...args) {
    super(...args);
    Object.defineProperty(this, 0, {value: 1});
  }
}
assertThrows(() => new ZeroFrozenArray().concat([1]), TypeError);
