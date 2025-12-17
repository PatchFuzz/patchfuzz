gczeal(0);

const text = `
function normalFunction() {
}
function asmJSModule(stdlib, foreign) {
  "use asm";
  function asmJSFunction(x, y) {
    x = x|0;
    y = y|0;
    return (x + y)|0;
  }
  return asmJSFunction;
}
`;


for (const forceEnableAsmJS of [false, true]) {
  const g = newGlobal({ newCompartment: true });

  g.evaluate(text, {
    fileName: "test.js",
  });

  const asmJSFunction = g.asmJSModule(globalThis, null);
  print(asmJSFunction(2, 3), 5);

  const dbg = Debugger();
  const gdbg = dbg.addDebuggee(g);

  gc();

  
  const topLevelScriptObject = dbg.findScripts().find(
    s => s.format == "js" && !s.isFunction);
  print(topLevelScriptObject, undefined);

  
  const asmJSModuleObject = dbg.findScripts().find(
    s => s.format == "wasm");
  print(!!asmJSModuleObject, true);

  const source = gdbg.createSource({
    text,
    url: "test.js",
    startLine: 1,
    forceEnableAsmJS,
  });

  const asmJSModuleJSObject = dbg.findScripts().find(
    s => s.format == "js" && s.displayName == "asmJSModule");
  if (forceEnableAsmJS) {
    
    
    
    print(asmJSModuleJSObject, undefined);
  } else {
    
    
    print(!!asmJSModuleJSObject, true);
  }
}


for (const forceEnableAsmJS of [false, true]) {
  const g = newGlobal({ newCompartment: true });

  const dbg = Debugger();
  const gdbg = dbg.addDebuggee(g);

  const source = gdbg.createSource({
    text,
    url: "test.js",
    startLine: 1,
    forceEnableAsmJS,
  });

  const asmJSModuleJSObject = dbg.findScripts().find(
    s => s.format == "js" && s.displayName == "asmJSModule");
  if (forceEnableAsmJS) {
    
    
    
    print(asmJSModuleJSObject, undefined);
  } else {
    
    
    
    
    
    
    
  }

  
  
  
  
  
  const asmJSModuleObject = dbg.findScripts().find(
    s => s.format == "wasm");
  print(asmJSModuleObject, undefined);
}
