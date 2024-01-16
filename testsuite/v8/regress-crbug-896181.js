



var a = new Array();
a[0] = 0.1;
a[2] = 0.2;
Object.defineProperty(a, 1, {
  get: function() {
    a[4] = 0.3;
  },
});

assertSame('0.1,,0.2', a.join());
