class Foo extends function () {
    return new Proxy(Object.create(new.target.prototype), {}); } {
  #bar = 7;
  has() { return #bar in this; }
};

print((new Foo()).has());
