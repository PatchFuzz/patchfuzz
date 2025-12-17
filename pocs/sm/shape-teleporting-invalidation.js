let usingDictionary = getPrefValue("experimental.dictionary_teleporting");

if (usingDictionary) {
  
  
  function exceed_dictionary_limit() {
    let o = Object.create(null);
    o = Object.create(o);
    o = Object.create(o);
    let l = o;
    o = Object.create(o);
    let u = o;
    o = Object.create(o);
    o = Object.create(o);

    print("Attempt")
    for (let i = 0; i < 10_000; i++) {
      Object.setPrototypeOf(u, null);
      Object.setPrototypeOf(u, l);
    }
  }
  exceed_dictionary_limit();
}

function changeProps(o) {
  Object.assign(o, { x: 1, y: 2, z: 3 });
  o.foo = 4;
  delete o.x;
}

function testProtoChange() {
  var receiver = {};
  var A = Object.create(null);
  var B = Object.create(A);

  
  
  
  Object.setPrototypeOf(receiver, B);
  print(hasInvalidatedTeleporting(receiver), false);
  print(hasInvalidatedTeleporting(A), false);
  print(hasInvalidatedTeleporting(B), false);

  
  
  var C = Object.create(null);
  Object.setPrototypeOf(B, C);
  print(hasInvalidatedTeleporting(receiver), false);
  print(hasInvalidatedTeleporting(A), true);
  print(hasInvalidatedTeleporting(B), true);
  print(hasInvalidatedTeleporting(C), false);

  
  
  var D = Object.create(null);
  Object.setPrototypeOf(B, D);
  print(hasInvalidatedTeleporting(receiver), false);
  print(hasInvalidatedTeleporting(A), true);
  print(hasInvalidatedTeleporting(B), true);
  print(hasInvalidatedTeleporting(C), true);
  print(hasInvalidatedTeleporting(D), false);

  
  changeProps(C);
  changeProps(D);
  print(hasInvalidatedTeleporting(C), true);
  print(hasInvalidatedTeleporting(D), false);
}
testProtoChange();

function testShadowingProp() {
  
  var A = Object.create(null);
  var B = Object.create(A);
  var C = Object.create(B);
  var receiver = Object.create(C);

  
  A.a = 1;
  B.b = 1;
  C.c = 1;
  receiver.receiver = 1;
  print(hasInvalidatedTeleporting(receiver), false);
  print(hasInvalidatedTeleporting(C), false);
  print(hasInvalidatedTeleporting(B), false);
  print(hasInvalidatedTeleporting(A), false);

  
  
  receiver.a = 1;
  receiver.b = 2;
  receiver.c = 3;
  print(hasInvalidatedTeleporting(receiver), false);
  print(hasInvalidatedTeleporting(C), false);
  print(hasInvalidatedTeleporting(B), false);
  print(hasInvalidatedTeleporting(A), false);

  
  C.b = 1;
  print(hasInvalidatedTeleporting(receiver), false);
  print(hasInvalidatedTeleporting(C), false);
  print(hasInvalidatedTeleporting(B), true);
  print(hasInvalidatedTeleporting(A), false);

  
  C.a = 2;
  print(hasInvalidatedTeleporting(receiver), false);
  print(hasInvalidatedTeleporting(C), false);
  print(hasInvalidatedTeleporting(B), true);
  print(hasInvalidatedTeleporting(A), true);

  
  changeProps(C);
  changeProps(B);
  print(hasInvalidatedTeleporting(C), false);
  print(hasInvalidatedTeleporting(B), true);
}
testShadowingProp();

function testShadowingPropStopsAtFirst() {
  
  var A = Object.create(null);
  A.x = 1;
  A.y = 2;
  A.z = 3;
  var B = Object.create(A);
  B.x = 1;
  B.y = 2;
  var C = Object.create(B);
  var receiver = Object.create(C);

  
  print(hasInvalidatedTeleporting(receiver), false);
  print(hasInvalidatedTeleporting(C), false);
  print(hasInvalidatedTeleporting(B), false);
  print(hasInvalidatedTeleporting(A), false);

  
  
  
  C.x = 1;
  print(hasInvalidatedTeleporting(receiver), false);
  print(hasInvalidatedTeleporting(C), false);
  print(hasInvalidatedTeleporting(B), true);
  print(hasInvalidatedTeleporting(A), false);

  
  C.y = 2;
  print(hasInvalidatedTeleporting(receiver), false);
  print(hasInvalidatedTeleporting(C), false);
  print(hasInvalidatedTeleporting(B), true);
  print(hasInvalidatedTeleporting(A), false);

  
  C.z = 3;
  print(hasInvalidatedTeleporting(receiver), false);
  print(hasInvalidatedTeleporting(C), false);
  print(hasInvalidatedTeleporting(B), true);
  print(hasInvalidatedTeleporting(A), true);
}
testShadowingPropStopsAtFirst();


print(hasInvalidatedTeleporting(Object.prototype), false);
