


function parseAndEvaluate(source) {
    let m = parseModule(source);
    moduleLink(m);
    return moduleEvaluate(m);
}

parseAndEvaluate("this")
  .then(value => assertEq(typeof(value), "undefined"))
  .catch(error => {
    
    assertEq(false, true)
  });

let m = parseModule("export function getThis() { return this; }");
moduleLink(m);
moduleEvaluate(m)
  .then(() => {
    let f = getModuleEnvironmentValue(m, "getThis");
    assertEq(typeof(f()), "undefined");
  });

drainJobQueue();
