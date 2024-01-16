




function b() { this.m(); }
var g = {m: function(){}};
var a = [g, g, {}];
for (var i = 0; i < a.length; ++i)
  b.call(a[i]);
