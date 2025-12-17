Realm.eval(Realm.current(), `function f(s) {
  return eval(s);
}
let g = f("0,function(y) { return ()=>{ eval() } }");
let i = g(1);
%ForceFlush(g);
print(g(2));`);
