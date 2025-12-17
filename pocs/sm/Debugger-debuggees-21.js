try {
  newGlobal().eval("(new Debugger).addAllGlobalsAsDebuggees();");
} catch (ex) {
  print(!!(''+ex).match(/can't start debugging: a debuggee script is on the stack/), true);
}
