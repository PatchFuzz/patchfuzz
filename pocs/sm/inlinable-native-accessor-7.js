setJitCompilerOption("ion.forceinlineCaches", 1);


ignoreUnhandledRejections();


function test(v) {
  for (var i = 0; i < 100; ++i) {
    
    v.key;
  }
}


function runTest(holder, thisValue, key, fn) {
  print(typeof fn, "function");
  print(
    holder === thisValue || Object.prototype.isPrototypeOf.call(holder, Object(thisValue)),
    true,
    `${String(key)} can be found on thisValue when stored in holder`
  );

  
  var safeKey = "__" + String(key);

  Object.defineProperty(holder, safeKey, {
    get: fn,
    configurable: true,
  });

  try {
    var t = Function(`return ${test.toString().replaceAll("key", safeKey)}`)();
    t(thisValue);
  } catch {
    
  }

  
  if (Object(thisValue) !== thisValue) {
    try {
      var t = Function(`return ${test.toString().replaceAll("key", safeKey)}`)();
      t(Object(thisValue));
    } catch {
      
    }
  }
}


function testForEach(object, holder, thisValue) {
  for (var key of Reflect.ownKeys(object)) {
    var desc = Reflect.getOwnPropertyDescriptor(object, key);
    if (typeof desc.value === "function")
      runTest(holder, thisValue, key, desc.value);
    if (typeof desc.get === "function")
      runTest(holder, thisValue, key, desc.get);
    if (typeof desc.set === "function")
      runTest(holder, thisValue, key, desc.set);
  }
}

var seenProto = new Set();


function testProto(objectOrPrimitive) {
  var proto = Object.getPrototypeOf(objectOrPrimitive);

  while (proto) {
    
    testForEach(proto, proto, objectOrPrimitive);

    
    proto = Reflect.getPrototypeOf(proto);

    
    if (seenProto.has(proto)) {
      break;
    }
    seenProto.add(proto);
  }
}


function testConstructor(objectOrPrimitive) {
  
  
  testForEach(obj.constructor, Object.getPrototypeOf(objectOrPrimitive), objectOrPrimitive);
}

function testSingleton(singleton) {
  var thisValue = {};
  testForEach(singleton, thisValue, thisValue);
}

for (var obj of [
  
  {},
  Function(),
  false,
  Symbol(),
  new Error(),

  
  0,
  0n,
  new Date(0),

  
  "",
  /(?:)/,

  
  [],
  new Int32Array(1),
  new Uint8Array(1),

  
  new Map(),
  new Set(),
  new WeakMap(),
  new WeakSet(),
  
  
  new ArrayBuffer(1),
  new SharedArrayBuffer(1),
  new DataView(new ArrayBuffer(8)),

  
  new WeakRef({}),
  new FinalizationRegistry(() => {}),

  
  new class extends Iterator{},
  new Promise(() => {}),
  (function*(){}).constructor,
  (async function*(){}).constructor,
  (async function(){}).constructor,
]) {
  testProto(obj);
  testConstructor(obj);
}

testSingleton(Math);
testSingleton(Atomics);
testSingleton(JSON);
testSingleton(Reflect);
