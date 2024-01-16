

const source = `
   class A {
  }

   class B extends A {
  }

   class C {
    field = "default value";
  }

   class D extends A {
    field = "default value";
  }
`;


let d = new Debugger();
let g = newGlobal({newCompartment: true})
let gw = d.addDebuggee(g);

g.evaluate(source);

function getStartLine(name) {
  return gw.makeDebuggeeValue(g.eval(name)).script.startLine;
}

function getStartColumn(name) {
  return gw.makeDebuggeeValue(g.eval(name)).script.startColumn;
}

function getSourceStart(name) {
  return gw.makeDebuggeeValue(g.eval(name)).script.sourceStart;
}

function getSourceLength(name) {
  return gw.makeDebuggeeValue(g.eval(name)).script.sourceLength;
}


matches = "";
lineno = 0;
for (text of source.split("\n")) {
  lineno++;

  column = text.indexOf("class");
  if (column < 0) {
    continue;
  }

  className = text[column + 6];
  matches += className;

  
  assertEq(getStartLine(className), lineno);
  assertEq(getStartColumn(className), column);

  
  offset = source.indexOf("class " + className)
  length = source.substring(offset).indexOf("}") + 1
  assertEq(getSourceStart(className), offset)
  assertEq(getSourceLength(className), length)
}


assertEq(matches, "ABCD");
