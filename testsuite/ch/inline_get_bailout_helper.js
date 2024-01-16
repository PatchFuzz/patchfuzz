




function Bar() {
  this.foo = 5;
}

Object.defineProperty(Bar.prototype, "data", {
  get: function () {
      return this.foo;
  },
  set: function (v) {
      this.foo = v;
  },
  configurable: true
});
