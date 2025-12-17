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
  print(obj.setProperty(key, 2).return, true);
  print(g.obj[key], 2);

  g.obj[key] = 1;
  print(g.obj[key], 1);
  print(obj.setProperty(keyObject, 2).return, true);
  print(g.obj[key], 2);
}

for (let key of obj.getOwnPropertySymbols()) {
  let keyObject = toObject(key);

  g.obj[key] = 1;
  print(g.obj[key], 1);
  print(obj.setProperty(key, 2).return, true);
  print(g.obj[key], 2);

  g.obj[key] = 1;
  print(g.obj[key], 1);
  print(obj.setProperty(keyObject, 2).return, true);
  print(g.obj[key], 2);
}
