const root = newGlobal({newCompartment: true});
root.eval("this.dbg = new Debugger()");
root.dbg.addDebuggee(this);
root.dbg.memory.trackingAllocationSites = true;

offThreadCompileToStencil(
  "function foo() {\n" +
  "  print('hello world');\n" +
  "}"
);
