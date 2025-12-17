async function* foo() {
  const g = this.newGlobal({sameZoneAs: this});
  g.Debugger(this).getNewestFrame().onStep = g.evaluate(`(function() {})`);
  return {};
}
function f() {
  try {
    f.apply(undefined, f);
  } catch {
    drainJobQueue();
    foo().next();
  }
}
foo().next();
f();
