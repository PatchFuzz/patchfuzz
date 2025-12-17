var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
dbg.onNewScript = function delazify(script, global) {
  
  script.getChildScripts();
};

g.eval("" + function f() {
  var $;
  eval('var obj={foo:1}; $=function() { print(obj.foo, 1); }');
  return $;
});
g.eval("f()();");
