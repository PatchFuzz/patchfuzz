async function fn() { e }
let p = fn();

var g = newGlobal();
g.evaluate(`
async function fn() { e }
fn()


P = newGlobal().eval("(class extends Promise { function(){} })")


Promise.all.call(P, [{ then() { nukeAllCCWs() } }])
`);
