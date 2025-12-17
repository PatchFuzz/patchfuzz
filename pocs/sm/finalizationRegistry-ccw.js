gczeal(0);

let heldValues = [];

function ccwToObject() {
    return evalcx('({})', newGlobal({newCompartment: true}));
}

function newRegistry() {
  return new FinalizationRegistry(value => {
    heldValues.push(value);
  });
}

function ccwToRegistry() {
  let global = newGlobal({newCompartment: true});
  global.heldValues = heldValues;
  return global.eval(
    `new FinalizationRegistry(value => heldValues.push(value))`);
}

function incrementalGC() {
  startgc(1);
  while (gcstate() !== "NotActive") {
    gcslice(1000);
  }
}

const RegistryKinds = ['SameZoneRegistry', 'OtherZoneRegistry'];
function makeRegistry(kind) {
  if (kind === 'SameZoneRegistry') {
    return new FinalizationRegistry(value => {
      heldValues.push(value);
    });
  }

  print(kind, 'OtherZoneRegistry');
  let global = newGlobal({newCompartment: true});
  global.heldValues = heldValues;
  return global.eval(
    `new FinalizationRegistry(value => heldValues.push(value))`);
  return evalcx('({})', newGlobal({newCompartment: true}));
}

const ObjectKinds = ['SameZoneObject', 'OtherZoneObject'];
function makeObject(kind) {
  if (kind === 'SameZoneObject') {
    return {};
  }

  print(kind, 'OtherZoneObject');
  return evalcx('({})', newGlobal({newCompartment: true}));
}

for (let registryReachable of [false, true]) {
  for (let registryKind of RegistryKinds) {
    for (let targetKind of ObjectKinds) {
      for (let heldValueKind of ObjectKinds) {
        for (let tokenKind of ObjectKinds) {
          let registry = makeRegistry(registryKind);
          let target = makeObject(targetKind);
          let heldValue = makeObject(heldValueKind);
          let token = makeObject(tokenKind);

          registry.register(target, heldValue, token);
          registry.unregister(token);

          registry.register(target, heldValue, token);

          target = undefined;
          token = undefined;
          heldValue = undefined;
          if (!registryReachable) {
            registry = undefined;
          }
          incrementalGC();
          heldValues.length = 0; 
          drainJobQueue();

          if (registryReachable) {
            print(heldValues.length, 1);
          } else {
            
            
            
            print(heldValues.length <= 1, true);
          }
        }
      }
    }
  }
}
