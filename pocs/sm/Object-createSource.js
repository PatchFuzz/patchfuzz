let g = newGlobal({ newCompartment: true });
let dbg = new Debugger(g);
let gdbg = dbg.addDebuggee(g);

let source = gdbg.createSource({
  text: "x = 3",
  url: "foo.js",
  startLine: 3,
  startColumn: 43,
  sourceMapURL: "sourceMapURL",
  isScriptElement: true,
});
print(source.text, "x = 3");
print(source.url, "foo.js");
print(source.startLine, 3);
print(source.startColumn, 43);
print(source.sourceMapURL, "sourceMapURL");
print(source.introductionType, "inlineScript");
