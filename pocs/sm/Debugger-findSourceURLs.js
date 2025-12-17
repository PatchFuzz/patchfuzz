let g = newGlobal({newCompartment: true});
let startNumber = gcparam("gcNumber");
g.evaluate("function foo() {}", { fileName: "foo.js" });
g.evaluate("function bar() {}", { fileName: "bar.js" });
g.evaluate("function baz() {}", { fileName: "baz.js" });

let dbg = new Debugger(g);
let urls = dbg.findSourceURLs();

let endNumber = gcparam("gcNumber");
if (startNumber == endNumber) {
  print(urls.includes("foo.js"), true);
  print(urls.includes("bar.js"), true);
  print(urls.includes("baz.js"), true);
}
