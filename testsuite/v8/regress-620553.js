





var o0 = [];
var o1 = [];
var cnt = 0;
o1.__defineGetter__(0, function() {
  if (cnt++ > 2) return;
  o0.shift();
  gc();
  o0.push(0);
  o0.concat(o1);
});
o1[0];
