function func(doEval) {
  if (doEval) {
    const dbg = this.newGlobal({sameZoneAs: {}}).Debugger({});
    dbg.getNewestFrame().eval(`
  function reaction() {
    
    return Map;
  };
  Promise.resolve(1).then(reaction);
`);
  }
}

print(isLazyFunction(func), true);
print(isRelazifiableFunction(func), false);


func(false);


print(isLazyFunction(func), false);
print(isRelazifiableFunction(func), true);


func(true);


print(isLazyFunction(func), false);
print(isRelazifiableFunction(func), false);


relazifyFunctions();
relazifyFunctions();

print(isLazyFunction(func), false);
print(isRelazifiableFunction(func), false);


drainJobQueue();
