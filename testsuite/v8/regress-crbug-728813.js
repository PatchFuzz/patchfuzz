



var p = new Proxy({}, {
  has: function () { throw "nope"; }
});
p.length = 2;
assertThrows(() => Array.prototype.indexOf.call(p));
