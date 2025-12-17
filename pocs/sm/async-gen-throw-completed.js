var g = newGlobal({ newCompartment: true });
g.eval("async function *f(){}");
var dbg = Debugger();
dbg.addDebuggee(g);
dbg.onEnterFrame = function(frame) {
  frame.onPop = function(completion) {
    completion.return.unsafeDereference().throw();
    return completion;
  };
};
let caught = false;
try {
  g.f().return();
} catch (e) {
  caught = true;
  print(e.message, "Async generator is in invalid state due to debugger interaction");
}
print(caught, true);
