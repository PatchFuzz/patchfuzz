(function () {
  var g = newGlobal({newCompartment: true});
  var dbg = new Debugger;
  var gw = dbg.addDebuggee(g);
  gw.executeInGlobalWithBindings("eval('Math')",{}).return
})();

