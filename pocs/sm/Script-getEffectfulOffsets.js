var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var numEffectfulOperations;

function onNewScript(script) {
  script.getChildScripts().forEach(onNewScript);
  numEffectfulOperations += script.getEffectfulOffsets().length;
}
dbg.onNewScript = onNewScript;

function test(code, expected) {
  numEffectfulOperations = 0;
  g.eval(`
function f(a, b, c) {
${code}
}
`);
  print(numEffectfulOperations, expected);
}

const base = 1;
test("", base);

test("a.f = 0", base + 1);
test("a.f++", base + 1);
test("return a.f", base + 0);
test("a[b] = 0", base + 1);
test("a[b]++", base + 1);
test("return a[b]", base + 0);
test("a = 0", base + 0);
test("d = 0", base + 1);
test("with (a) { b = 0; }", base + 7);
test("let o = {}; ({x: o.x} = { x: 10 })", base + 1);
test("var x", base + 0);



test(`
let d = 10;
`, base + 0);



test(`
let d = 10;
function g() {
  d;
}
`, base + 0);




test(`
class B {
  set #x(x) {}
}
`, base + 1);

test(`
class B {
  get #x() {}
  set #x(x) {}
}
`, base + 2);
