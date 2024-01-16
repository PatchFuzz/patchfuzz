
function f(s) {
  
  for (var i = 0; i < 50; i++) {
    s = s.replace("a", "b");
  }
  trialInline();
  relazifyFunctions();

  
  for (var j = 0; j < 50; j++) {}

  return s;
}
assertEq(f("a"), "b");
