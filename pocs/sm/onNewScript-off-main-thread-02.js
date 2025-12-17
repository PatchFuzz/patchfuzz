var global = newGlobal({newCompartment: true});
var dbg = new Debugger(global);

dbg.onNewScript = function (s) {
  if (s.url === "<string>")
    print(s.getChildScripts().length, 1);
};

global.eval('offThreadCompileToStencil("function inner() { \\\"use asm\\\"; function xxx() {} return xxx; }");');
global.eval('var stencil = finishOffThreadStencil();');
global.eval('evalStencil(stencil);');
