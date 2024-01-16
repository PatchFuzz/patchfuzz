



function changeProps(o) {
  Object.assign(o, {x: 1, y: 2, z: 3});
  o.foo = 4;
  delete o.x;
}

function testProtoChange() {
  var receiver = {};
  var A = Object.create(null);
  var B = Object.create(A);

  
  
  
  Object.setPrototypeOf(receiver, B);
  assertEq(hasInvalidatedTeleporting(receiver), false);
  assertEq(hasInvalidatedTeleporting(A), false);
  assertEq(hasInvalidatedTeleporting(B), false);

  
  
  var C = Object.create(null);
  Object.setPrototypeOf(B, C);
  assertEq(hasInvalidatedTeleporting(receiver), false);
  assertEq(hasInvalidatedTeleporting(A), true);
  assertEq(hasInvalidatedTeleporting(B), true);
  assertEq(hasInvalidatedTeleporting(C), false);

  
  
  var D = Object.create(null);
  Object.setPrototypeOf(B, D);
  assertEq(hasInvalidatedTeleporting(receiver), false);
  assertEq(hasInvalidatedTeleporting(A), true);
  assertEq(hasInvalidatedTeleporting(B), true);
  assertEq(hasInvalidatedTeleporting(C), true);
  assertEq(hasInvalidatedTeleporting(D), false);

  
  changeProps(C);
  changeProps(D);
  assertEq(hasInvalidatedTeleporting(C), true);
  assertEq(hasInvalidatedTeleporting(D), false);
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
  assertEq(hasInvalidatedTeleporting(receiver), false);
  assertEq(hasInvalidatedTeleporting(C), false);
  assertEq(hasInvalidatedTeleporting(B), false);
  assertEq(hasInvalidatedTeleporting(A), false);

  
  
  receiver.a = 1;
  receiver.b = 2;
  receiver.c = 3;
  assertEq(hasInvalidatedTeleporting(receiver), false);
  assertEq(hasInvalidatedTeleporting(C), false);
  assertEq(hasInvalidatedTeleporting(B), false);
  assertEq(hasInvalidatedTeleporting(A), false);

  
  C.b = 1;
  assertEq(hasInvalidatedTeleporting(receiver), false);
  assertEq(hasInvalidatedTeleporting(C), false);
  assertEq(hasInvalidatedTeleporting(B), true);
  assertEq(hasInvalidatedTeleporting(A), false);

  
  C.a = 2;
  assertEq(hasInvalidatedTeleporting(receiver), false);
  assertEq(hasInvalidatedTeleporting(C), false);
  assertEq(hasInvalidatedTeleporting(B), true);
  assertEq(hasInvalidatedTeleporting(A), true);

  
  changeProps(C);
  changeProps(B);
  assertEq(hasInvalidatedTeleporting(C), false);
  assertEq(hasInvalidatedTeleporting(B), true);
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

  
  assertEq(hasInvalidatedTeleporting(receiver), false);
  assertEq(hasInvalidatedTeleporting(C), false);
  assertEq(hasInvalidatedTeleporting(B), false);
  assertEq(hasInvalidatedTeleporting(A), false);

  
  
  
  C.x = 1;
  assertEq(hasInvalidatedTeleporting(receiver), false);
  assertEq(hasInvalidatedTeleporting(C), false);
  assertEq(hasInvalidatedTeleporting(B), true);
  assertEq(hasInvalidatedTeleporting(A), false);

  
  C.y = 2;
  assertEq(hasInvalidatedTeleporting(receiver), false);
  assertEq(hasInvalidatedTeleporting(C), false);
  assertEq(hasInvalidatedTeleporting(B), true);
  assertEq(hasInvalidatedTeleporting(A), false);

  
  C.z = 3;
  assertEq(hasInvalidatedTeleporting(receiver), false);
  assertEq(hasInvalidatedTeleporting(C), false);
  assertEq(hasInvalidatedTeleporting(B), true);
  assertEq(hasInvalidatedTeleporting(A), true);
}
testShadowingPropStopsAtFirst();


assertEq(hasInvalidatedTeleporting(Object.prototype), false);
