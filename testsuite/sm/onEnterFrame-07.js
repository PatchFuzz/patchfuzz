var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
var visibleFrames = 0;
dbg.onEnterFrame = function (frame) {
  print("> " + frame.script.url);
  visibleFrames++;
}

g.eval("(" + function iife() {
  [1].forEach(function noop() {});
  for (let x of [1]) {}
} + ")()");


assertEq(visibleFrames, 3);
