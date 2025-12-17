var log = [];

function f() {}
Object.defineProperty(Function.prototype, "name", {
  get() { log.push("getter"); return "ok"; }
});
delete f.name;
var b = f.bind();
print("bound ok", b.name);
print("bound ok", b.name);
print("bound ok", b.name);
print(["getter"], log);
