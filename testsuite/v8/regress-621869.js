





var o0 = [];
var o1 = [];
var cnt = 0;
var only_scavenge = true;
o1.__defineGetter__(0, function() {
  if (cnt++ > 2) return;
  o0.shift();
  gc(only_scavenge);
  o0.push((64));
  o0.concat(o1);
});
o1[0];
