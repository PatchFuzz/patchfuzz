var o = { w: { x: { y: { z: {} } } } };
Match.Pattern([{node: {}, edge: "w"},
               {node: {}, edge: "x"},
               {node: {}, edge: "y"},
               {node: {}, edge: "z"}])
  .print(findPath(o, o.w.x.y.z));
print(JSON.stringify(findPath(o, o.w.x.y.z)));

var a = [ , o ];
Match.Pattern([{node: {}, edge: "objectElements[1]"}])
  .print(findPath(a, o));
print(JSON.stringify(findPath(a, o)));

function C() {}
C.prototype.obj = {};
var c = new C;
Match.Pattern([{node: {}, edge: "shape"},
               {node: Match.Pattern.ANY, edge: "base"},
               {node: Match.Pattern.ANY, edge: "baseshape_proto"},
               {node: { constructor: Match.Pattern.ANY }, edge: "obj"}])
  .print(findPath(c, c.obj));
print(JSON.stringify(findPath(c, c.obj)));

function f(x) { return function g(y) { return x+y; }; }
var o = {}
var gc = f(o);
Match.Pattern([{node: gc, edge: "**UNKNOWN SLOT 1**"},
               {node: Match.Pattern.ANY, edge: "x"}])
  .print(findPath(gc, o));
print(JSON.stringify(findPath(gc, o)));

Match.Pattern([{node: {}, edge: "shape"},
               {node: Match.Pattern.ANY, edge: "base"},
               {node: Match.Pattern.ANY, edge: "baseshape_global"},
               {node: {}, edge: "o"}])
  .print(findPath(o, o));
print(findPath(o, o).map((e) => e.edge).toString());


var so = { sym: Symbol() };
Match.Pattern([{node: {}, edge: "sym" }])
  .print(findPath(so, so.sym));
print(findPath(so, so.sym).map((e) => e.edge).toString());
