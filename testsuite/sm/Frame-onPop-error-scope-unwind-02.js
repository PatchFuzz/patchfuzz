

var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
var correct;
dbg.onEnterFrame = function (f) {
  if (f.callee && f.callee.name == "f") {
    f.onPop = function() {
      
      
      correct = (f.environment.getVariable("e") === 42 &&
                 f.environment.getVariable("outer") === undefined);
    };
  }
};
g.eval("" + function f() {
  var outer = 43;
  
  for (;;) {
    try {
      eval("");
      throw 42;
    } catch (e) {
      noSuchFn(e);
    }
  }
});


try {
  g.eval("f();");
} catch (e) {
  
}

assertEq(correct, true);
