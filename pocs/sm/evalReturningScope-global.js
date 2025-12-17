const g = newGlobal({
  discardSource: true
});

evalReturningScope(`
var f = function(){
  var g = function(){
  };
  g();
};
f();
`, g);
