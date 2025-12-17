var ary = Array(1);
ary.prop = "pass";
Object.prototype.prop = "Got object prototype : Failed";
Array.prototype.prop = "Got array prototype. Failed";
Object.defineProperty(Object.prototype, 0, {
  get: function () {
    print(this.prop);
    return 3;
  }
});
ary.slice();

