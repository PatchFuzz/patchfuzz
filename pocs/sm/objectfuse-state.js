function checkObjectFuse(obj, expected) {
  var state = getObjectFuseState(obj);
  print(JSON.stringify(state), JSON.stringify(expected));
}
function markConstant(obj, key) {
  print(getObjectFuseState(obj).properties[key], "Untracked");
  
  
  
  obj[key] = Object.getOwnPropertyDescriptor(obj, key).value;
}
function testBasic() {
  var obj = {};
  addObjectFuse(obj);
  checkObjectFuse(obj, {generation:0,properties:{}});

  
  obj.x = 1;
  checkObjectFuse(obj, {generation:0,properties:{x:"Untracked"}});
  markConstant(obj, "x");
  checkObjectFuse(obj, {generation:0,properties:{x:"Constant"}});
  obj.x = 2;
  checkObjectFuse(obj, {generation:0,properties:{x:"NotConstant"}});
  obj.x = 3;
  checkObjectFuse(obj, {generation:0,properties:{x:"NotConstant"}});

  
  obj.a = undefined;
  checkObjectFuse(obj, {generation:0,properties:{x:"NotConstant",a:"Untracked"}});
  markConstant(obj, "a");
  checkObjectFuse(obj, {generation:0,properties:{x:"NotConstant",a:"Constant"}});
  print(obj.a, undefined);
  checkObjectFuse(obj, {generation:0,properties:{x:"NotConstant",a:"Constant"}});
  obj.a = undefined;
  checkObjectFuse(obj, {generation:0,properties:{x:"NotConstant",a:"NotConstant"}});
}
for (var i = 0; i < 20; i++) {
  testBasic();
}

function testRemove() {
  var obj = {};
  addObjectFuse(obj);
  checkObjectFuse(obj, {generation:0,properties:{}});

  
  obj.x = 1;
  checkObjectFuse(obj, {generation:0,properties:{x:"Untracked"}});
  delete obj.x;
  checkObjectFuse(obj, {generation:0,properties:{}});

  
  obj.x = 1;
  checkObjectFuse(obj, {generation:0,properties:{x:"Untracked"}});
  markConstant(obj, "x");
  checkObjectFuse(obj, {generation:0,properties:{x:"Constant"}});
  delete obj.x;
  checkObjectFuse(obj, {generation:1,properties:{}});

  
  
  obj.z = undefined;
  markConstant(obj, "z");
  checkObjectFuse(obj, {generation:1,properties:{z:"Constant"}});
  obj.z = 2;
  checkObjectFuse(obj, {generation:1,properties:{z:"NotConstant"}});
  delete obj.z;
  checkObjectFuse(obj, {generation:2,properties:{}});

  
  obj.a = 1;
  markConstant(obj, "a");
  obj.b = 1;
  markConstant(obj, "b");
  obj.c = 1;
  markConstant(obj, "c");
  obj.d = 1;
  markConstant(obj, "d");
  obj.e = 1;
  markConstant(obj, "e");
  delete obj.b;
  delete obj.d;
  delete obj.e;
  checkObjectFuse(obj, {generation:5,properties:{a:"Constant",c:"Constant"}});
}
for (var i = 0; i < 20; i++) {
  testRemove();
}

function testMany() {
  
  var o = {};
  addObjectFuse(o);
  for (var i = 0; i < 1000; i++) {
    o["prop" + i] = 1; 
    o["prop" + i] = 1; 
  }
  
  for (var i = 0; i < 1000; i += 3) {
    o["prop" + i] = 3;
  }
  var state = getObjectFuseState(o);
  print(state.generation, 0);
  for (var i = 0; i < 1000; i++) {
    print(state.properties["prop" + i], (i % 3) ? "Constant" : "NotConstant");
  }
  for (var i = 0; i < 1000; i += 2) {
    delete o["prop" + i];
  }
  state = getObjectFuseState(o);
  print(state.generation, 500);
  print(Object.keys(state.properties).length, 500);
}
testMany();
testMany();

function testTeleporting() {
  
  var d = Object.create(null);
  addObjectFuse(d);
  var c = Object.create(d);
  addObjectFuse(c);
  var b = Object.create(c);
  addObjectFuse(b);
  var a = Object.create(b);
  addObjectFuse(a);

  d.x = 1;
  checkObjectFuse(d, {generation:0,properties:{x:"Untracked"}});

  
  a.x = 1;
  checkObjectFuse(a, {generation:0,properties:{x:"Untracked"}});
  checkObjectFuse(d, {generation:0,properties:{x:"Untracked"}});
  b.x = 1;
  checkObjectFuse(b, {generation:0,properties:{x:"Untracked"}});
  checkObjectFuse(d, {generation:0,properties:{x:"Untracked"}});

  
  d.y = 1;
  markConstant(d, "y");
  b.y = 1;
  checkObjectFuse(b, {generation:0,properties:{x:"Untracked",y:"Untracked"}});
  checkObjectFuse(d, {generation:1,properties:{x:"Untracked",y:"Constant"}});

  
  
  d.y = 3;
  checkObjectFuse(d, {generation:1,properties:{x:"Untracked",y:"NotConstant"}});
  c.y = 1;
  checkObjectFuse(d, {generation:2,properties:{x:"Untracked",y:"NotConstant"}});

  
  Object.setPrototypeOf(a, {});
  checkObjectFuse(a, {generation:0,properties:{x:"Untracked"}});
  checkObjectFuse(b, {generation:0,properties:{x:"Untracked",y:"Untracked"}});
  checkObjectFuse(c, {generation:0,properties:{y:"Untracked"}});
  checkObjectFuse(d, {generation:2,properties:{x:"Untracked",y:"NotConstant"}});

  
  Object.setPrototypeOf(b, {});
  checkObjectFuse(a, {generation:0,properties:{x:"Untracked"}});
  checkObjectFuse(b, {generation:1,properties:{x:"Untracked",y:"Untracked"}});
  checkObjectFuse(c, {generation:1,properties:{y:"Untracked"}});
  checkObjectFuse(d, {generation:3,properties:{x:"Untracked",y:"NotConstant"}});

  Object.setPrototypeOf(c, {});
  checkObjectFuse(a, {generation:0,properties:{x:"Untracked"}});
  checkObjectFuse(b, {generation:1,properties:{x:"Untracked",y:"Untracked"}});
  checkObjectFuse(c, {generation:2,properties:{y:"Untracked"}});
  checkObjectFuse(d, {generation:4,properties:{x:"Untracked",y:"NotConstant"}});
}
for (var i = 0; i < 15; i++) {
  testTeleporting();
}

function testAccessor() {
  var o = {};
  addObjectFuse(o);

  
  o.x = 1;
  markConstant(o, "x");
  checkObjectFuse(o, {generation:0,properties:{x:"Constant"}});

  
  Object.defineProperty(o, "x", {get: function() { return 1; }});
  checkObjectFuse(o, {generation:0,properties:{x:"NotConstant"}});
  Object.defineProperty(o, "x", {get: function() { return 1; }});
  checkObjectFuse(o, {generation:0,properties:{x:"NotConstant"}});

  
  o = {};
  addObjectFuse(o);
  Object.defineProperty(o, "x", {get: function() { return 1; }, configurable: true});
  checkObjectFuse(o, {generation:0,properties:{x:"Untracked"}});
  Object.defineProperty(o, "x", {get: function() { return 1; }, configurable: true});
  checkObjectFuse(o, {generation:0,properties:{x:"Constant"}});
  Object.defineProperty(o, "x", {value: 3});
  checkObjectFuse(o, {generation:0,properties:{x:"NotConstant"}});
}
for (var i = 0; i < 15; i++) {
  testAccessor();
}

function testSwapNonProto() {
  const obj = new FakeDOMObject();
  addObjectFuse(obj);
  obj.foo = 1;
  obj.foo = 2;
  obj.foo = 3;
  checkObjectFuse(obj, {generation:0,properties:{foo:"NotConstant"}});

  
  const {transplant} = transplantableObject({object: obj});
  transplant(this);
  addObjectFuse(obj);
  checkObjectFuse(obj, {generation:1,properties:{foo:"Untracked"}});
}
for (var i = 0; i < 15; i++) {
  testSwapNonProto();
}

function testSwapProto() {
  
  
  
  const protoB = Object.create(null);
  protoB.prop = 567;
  addObjectFuse(protoB);
  markConstant(protoB, "prop");
  const protoA = new FakeDOMObject();
  addObjectFuse(protoA);
  Object.setPrototypeOf(protoA, protoB);
  const receiver = Object.create(protoA);

  protoA.foo = 1;
  protoA.foo = 2;
  protoA.foo = 3;
  checkObjectFuse(protoA, {generation:0,properties:{foo:"NotConstant"}});
  checkObjectFuse(protoB, {generation:0,properties:{prop:"Constant"}});

  
  
  
  
  const {transplant} = transplantableObject({object: protoA});
  transplant(this);

  
  
  addObjectFuse(protoA);
  checkObjectFuse(protoA, {generation:2,properties:{foo:"Untracked"}});
  checkObjectFuse(protoB, {generation:1,properties:{prop:"Constant"}});
}
for (var i = 0; i < 15; i++) {
  testSwapProto();
}
