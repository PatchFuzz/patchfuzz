function parseAndEvaluate(source) {
    let m = parseModule(source);
    moduleLink(m);
    return moduleEvaluate(m);
}

parseAndEvaluate("this")
  .then(value => print(typeof(value), "undefined"))
  .catch(error => {
    
    print(false, true)
  });

let m = parseModule("export function getThis() { return this; }");
moduleLink(m);
moduleEvaluate(m)
  .then(() => {
    let f = getModuleEnvironmentValue(m, "getThis");
    print(typeof(f()), "undefined");
  });

drainJobQueue();
