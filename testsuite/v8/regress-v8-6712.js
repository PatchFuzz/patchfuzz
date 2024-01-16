



var log = [];

function f() {}
Object.defineProperty(Function.prototype, "name", {
  get() { log.push("getter"); return "ok"; }
});
delete f.name;
var b = f.bind();
assertEquals("bound ok", b.name);
assertEquals("bound ok", b.name);
assertEquals("bound ok", b.name);
assertEquals(["getter"], log);
