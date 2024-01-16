var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);

g.eval(`
function f() {
  
  
  
  (() => {})();

  
  return this;
}
`);

var errors = [];

function enterFrame(frame) {
  
  dbg.onEnterFrame = undefined;

  
  var r = frame.eval("this");
  if (r.throw) {
    errors.push(r.throw);
  }

  
  dbg.onEnterFrame = enterFrame;
};

dbg.onEnterFrame = enterFrame;

g.f();

assertEq(errors.length, 1);
assertEq(errors[0].unsafeDereference().toString(),
         "Error: variable 'this' has been optimized out");
