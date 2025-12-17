var dbg = new Debugger;

function checkProperties(census) {
  print(typeof census, 'object');
  for (prop of Object.getOwnPropertyNames(census)) {
    var desc = Object.getOwnPropertyDescriptor(census, prop);
    print(desc.enumerable, true);
    print(desc.configurable, true);
    print(desc.writable, true);
    if (typeof desc.value === 'object')
      checkProperties(desc.value);
    else
      print(typeof desc.value, 'number');
  }
}

checkProperties(dbg.memory.takeCensus());

var g = newGlobal({newCompartment: true});
dbg.addDebuggee(g);
checkProperties(dbg.memory.takeCensus());
