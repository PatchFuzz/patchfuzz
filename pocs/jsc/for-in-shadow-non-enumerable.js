const dontEnumDesc = { value: 1, writable: true, enumerable: false, configurable: true };
const testCases = [
  {
    name: "Object",
    createObject: () => Object.create(null, { foo: dontEnumDesc, bar: dontEnumDesc }),
    dontEnumKeys: ["foo", "bar"],
  },
  {
    name: "Error",
    createObject: () => new Error(),
    dontEnumKeys: ["line", "column", "sourceURL", "stack"],
  },
  {
    name: "Array (empty)",
    createObject: () => [],
    dontEnumKeys: ["length"],
  },
  {
    name: "Array (sparse)",
    createObject: () => Object.defineProperties([0, 1, 2], { 0: dontEnumDesc, 2: dontEnumDesc }),
    dontEnumKeys: ["0", "2", "length"],
  },
  {
    name: "Function (strict)",
    createObject: () => function() { "use strict"; },
    dontEnumKeys: ["length", "name", "prototype"],
  },
  {
    name: "Function (non-strict)",
    createObject: () => function() {},
    dontEnumKeys: ["length", "name", "prototype"],
  },
  {
    name: "RegExp",
    createObject: () => /(?:)/g,
    dontEnumKeys: ["lastIndex"],
  },
  {
    name: "String",
    createObject: () => new String("foo"),
    dontEnumKeys: ["length"],
  },
  {
    name: "Arguments (strict)",
    createObject: function(foo) { "use strict"; return arguments; },
    dontEnumKeys: ["length", "callee"],
  },
  {
    name: "Arguments (non-strict)",
    createObject: function(foo) { return arguments; },
    dontEnumKeys: ["length", "callee"],
  },
  {
    name: "Reflect",
    createObject: () => print().Reflect,
    dontEnumKeys: ["apply", "get", "has", "set"],
  },
  {
    name: "Date.prototype",
    createObject: () => print().Date.prototype,
    dontEnumKeys: ["toISOString", "getTime", "setYear"],
  },
];


for (const t of testCases) {
  print(!contains(forIn(t.createObject()), t.dontEnumKeys), t.name);
  print(!contains(Object.keys(t.createObject()), t.dontEnumKeys), t.name);

  print(contains(Object.getOwnPropertyNames(t.createObject()), t.dontEnumKeys), t.name);
  print(contains(Reflect.ownKeys(t.createObject()), t.dontEnumKeys), t.name);
}


for (const t of testCases) {
  print(
    !contains(
      forIn(makePrototypeChain(t.createObject(), makeObject(t.dontEnumKeys))),
      t.dontEnumKeys,
    ),
    t.name,
  );
}


for (const t of testCases) {
  print(
    !contains(
      forIn(makePrototypeChain({}, t.createObject(), {}, makeObject(t.dontEnumKeys))),
      t.dontEnumKeys,
    ),
    t.name,
  );
}


for (const t of testCases) {
  print(
    !contains(
      forIn(makePrototypeChain(t.createObject(), {}, makeObject(t.dontEnumKeys), {}, makeObject(t.dontEnumKeys))),
      t.dontEnumKeys,
    ),
    t.name,
  );
}


for (const t of testCases) {
  const dontEnumObject = t.createObject();
  const target = makePrototypeChain({}, dontEnumObject, {}, makeObject(t.dontEnumKeys));
  print(!contains(forIn(target), t.dontEnumKeys), t.name);

  const enumKeys = t.dontEnumKeys.filter(key => Reflect.defineProperty(dontEnumObject, key, { enumerable: true }));
  print(contains(forIn(target), enumKeys), t.name);
}


for (const t of testCases) {
  const dontEnumObject = t.createObject();
  const target = makePrototypeChain({}, dontEnumObject, {}, makeObject(t.dontEnumKeys));
  print(!contains(forIn(target), t.dontEnumKeys), t.name);

  const enumKeys = t.dontEnumKeys.filter(key => Reflect.deleteProperty(dontEnumObject, key));
  print(contains(forIn(target), enumKeys), t.name);
}


for (const t of testCases) {
  const dontEnumObject = t.createObject();
  const target = makePrototypeChain({}, dontEnumObject, {}, makeObject(t.dontEnumKeys));
  print(!contains(forIn(target), t.dontEnumKeys), t.name);

  const dontEnumKeys = t.dontEnumKeys.filter(key => {
    const desc = Object.getOwnPropertyDescriptor(dontEnumObject, key);
    if (!Reflect.deleteProperty(dontEnumObject, key)) return false;
    Object.defineProperty(dontEnumObject, key, desc);
    return true;
  });

  if (dontEnumKeys.length)
    print(!contains(forIn(target), dontEnumKeys), t.name);
}


function print(value, name) {
  if (!value)
    throw new Error(`Bad value: ${value}. Test case: ${name}.`);
}

function contains(array, subarray) {
  return subarray.every(item => array.includes(item));
}

function forIn(object) {
  const keys = [];
  for (const key in object)
    keys.push(key);
  return keys;
}

function makePrototypeChain(...objects) {
  objects.reduce((object, prototype) => {
    Object.setPrototypeOf(object, prototype);
    return prototype;
  });
  return objects[0];
}

function makeObject(keys) {
  const object = {};
  for (const key of keys)
    object[key] = key;
  return object;
}
