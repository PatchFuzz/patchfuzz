const code = `
debugger;
`;
let g = newGlobal({newCompartment: true});
let dbg = new Debugger(g);
const bytes = g.compileToStencilXDR(code, {
  fileName: "test-filename.js",
  lineNumber: 12,
  forceFullParse: true,
  displayURL: "display-url.js",
  sourceMapURL: "source-map-url.js",
});
let hit = false;
dbg.onDebuggerStatement = frame => {
  hit = true;
  const source = frame.script.source;
  print(source.url, "test-filename.js");
  print(source.displayURL, "display-url.js");
  print(source.sourceMapURL, "source-map-url.js");
  print(source.startLine, 12);
};
g.evalStencilXDR(bytes, {});
print(hit, true);
