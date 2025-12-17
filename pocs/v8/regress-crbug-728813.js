var p = new Proxy({}, {
  has: function () { throw "nope"; }
});
p.length = 2;
print(() => Array.prototype.indexOf.call(p));
