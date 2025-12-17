var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
var gw = dbg.addDebuggee(g);

g.eval(`
  var obj = {
    p: 0,
    [Symbol.iterator]: 0,
  };
`);


function toObject(key) {
  return {
    [Symbol.toPrimitive]() {
      return key;
    }
  };
}

let obj = gw.getProperty("obj").return;

for (let key of obj.getOwnPropertyNames()) {
  let keyObject = toObject(key);

  g.obj[key] = 1;
  print(g.obj[key], 1);
  print(obj.deleteProperty(key), true);
  print(g.obj[key], undefined);

  g.obj[key] = 1;
  print(g.obj[key], 1);
  print(obj.deleteProperty(keyObject), true);
  print(g.obj[key], undefined);
}

for (let key of obj.getOwnPropertySymbols()) {
  let keyObject = toObject(key);

  g.obj[key] = 1;
  print(g.obj[key], 1);
  print(obj.deleteProperty(key), true);
  print(g.obj[key], undefined);

  g.obj[key] = 1;
  print(g.obj[key], 1);
  print(obj.deleteProperty(keyObject), true);
  print(g.obj[key], undefined);
}
