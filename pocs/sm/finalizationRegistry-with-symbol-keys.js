function checkPropertyDescriptor(obj, property, writable, enumerable,
                                 configurable) {
  let desc = Object.getOwnPropertyDescriptor(obj, property);
  print(typeof desc, "object");
  print(desc.writable, writable);
  print(desc.enumerable, enumerable);
  print(desc.configurable, configurable);
}

function print(thunk) {
  let error;
  try {
    thunk();
  } catch (e) {
    error = e;
  }
  print(error instanceof TypeError, true);
}


print(typeof this.FinalizationRegistry, "function");


print(() => new FinalizationRegistry());
print(() => new FinalizationRegistry(1));
new FinalizationRegistry(x => 0);


print(Object.getPrototypeOf(FinalizationRegistry), Function.prototype);


checkPropertyDescriptor(FinalizationRegistry, 'prototype', false, false, false);


let proto = FinalizationRegistry.prototype;
print(Object.getPrototypeOf(proto), Object.prototype);


print(proto.constructor, FinalizationRegistry);


print(proto.hasOwnProperty('register'), true);
print(typeof proto.register, 'function');


print(proto.hasOwnProperty('unregister'), true);
print(typeof proto.unregister, 'function');


print(proto.hasOwnProperty('cleanupSome'), true);
print(typeof proto.cleanupSome, 'function');


print(proto[Symbol.toStringTag], "FinalizationRegistry");
checkPropertyDescriptor(proto, Symbol.toStringTag, false, false, true);


let registry = new FinalizationRegistry(x => 0);
print(Object.getPrototypeOf(registry), proto);
print(Object.getOwnPropertyNames(registry).length, 0);

let heldValues = [];
registry = new FinalizationRegistry(value => {
  heldValues.push(value);
});


heldValues = [];
registry.register({}, 42);
gc();
drainJobQueue();
print(heldValues.length, 1);
print(heldValues[0], 42);


heldValues = [];
for (let i = 0; i < 100; i++) {
  registry.register({}, i);
}
gc();
drainJobQueue();
print(heldValues.length, 100);
heldValues = heldValues.sort((a, b) => a - b);
for (let i = 0; i < 100; i++) {
  print(heldValues[i], i);
}


heldValues = [];
let heldValues2 = [];
let registry2 = new FinalizationRegistry(value => {
  heldValues2.push(value);
});
{
  let object = {};
  registry.register(object, 1);
  registry2.register(object, 2);
  object = null;
}
gc();
drainJobQueue();
print(heldValues.length, 1);
print(heldValues[0], 1);
print(heldValues2.length, 1);
print(heldValues2[0], 2);


heldValues = [];
let token = {};
registry.register({}, 1, token);
registry.unregister(token);
gc();
drainJobQueue();
print(heldValues.length, 0);


heldValues = [];
let token2 = {};
registry.register({}, 1, token);
registry.register({}, 2, token2);
registry.register({}, 3, token);
registry.register({}, 4, token2);
registry.unregister(token);
gc();
drainJobQueue();
print(heldValues.length, 2);
heldValues = heldValues.sort((a, b) => a - b);
print(heldValues[0], 2);
print(heldValues[1], 4);


let other = newGlobal({newCompartment: true});
heldValues = [];
registry.register(evalcx('({})', other), 1);
gc();
drainJobQueue();
print(heldValues.length, 1);
print(heldValues[0], 1);


let heldValue = evalcx('{}', other);
heldValues = [];
registry.register({}, heldValue);
gc();
drainJobQueue();
print(heldValues.length, 1);
print(heldValues[0], heldValue);


token = evalcx('({})', other);
heldValues = [];
registry.register({}, 1, token);
gc();
drainJobQueue();
print(heldValues.length, 1);
print(heldValues[0], 1);
heldValues = [];
registry.register({}, 1, token);
registry.unregister(token);
gc();
drainJobQueue();
print(heldValues.length, 0);


class MyRegistry extends FinalizationRegistry {
  constructor(callback) {
    super(callback);
  }
}
let r2 = new MyRegistry(value => {
  heldValues.push(value);
});
heldValues = [];
r2.register({}, 42);
gc();
drainJobQueue();
print(heldValues.length, 1);
print(heldValues[0], 42);


heldValues = [];
let r5 = new FinalizationRegistry(v => heldValues.push(v));
r5.register({}, 1);
r5.register({}, 2);
r5.register({}, 3);
gc();
r5.cleanupSome();
print(heldValues.length, 3);
heldValues = heldValues.sort((a, b) => a - b);
print(heldValues[0], 1);
print(heldValues[1], 2);
print(heldValues[2], 3);


let r6 = new FinalizationRegistry(x => {
  r6.cleanupSome();
});
r6.register({}, 1);
gc();
drainJobQueue();


let callbackCounter7 = 0;
let r7 = new FinalizationRegistry(x => {
  callbackCounter7++;
  r7.cleanupSome();
});
r7.register({}, 1);
r7.register({}, 2);
r7.register({}, 3);
r7.register({}, 4);
gc();
drainJobQueue();
print(callbackCounter7, 4);


let target = {};
registry = new FinalizationRegistry(value => undefined);
registry.register(target, 1);
let weakRef = new WeakRef(registry);
registry = undefined;
print(typeof weakRef.deref(), 'object');
drainJobQueue();
gc();
print(weakRef.deref(), undefined);
print(typeof target, 'object');



registry = new FinalizationRegistry(value => undefined);
registry.register(target, 1, target);
weakRef = new WeakRef(registry);
registry = undefined;
print(typeof weakRef.deref(), 'object');
drainJobQueue();
gc();
print(weakRef.deref(), undefined);
print(typeof target, 'object');



heldValues = [];
new FinalizationRegistry(value => {
  heldValues.push(value);
}).register({}, 1);
gc();
drainJobQueue();
print(heldValues.length, 0);
