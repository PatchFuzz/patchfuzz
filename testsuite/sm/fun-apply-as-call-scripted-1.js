




function one() {
  return 1;
}

function testThisAbsent() {
  for (let i = 0; i < 200; ++i) {
    let r = one.apply();
    assertEq(r, 1);
  }
}
for (let i = 0; i < 2; ++i) testThisAbsent();

function test0() {
  for (let i = 0; i < 200; ++i) {
    let r = one.apply(null);
    assertEq(r, 1);
  }
}
for (let i = 0; i < 2; ++i) test0();


function test1Null() {
  for (let i = 0; i < 200; ++i) {
    let r = one.apply(null, null);
    assertEq(r, 1);
  }
}
for (let i = 0; i < 2; ++i) test1Null();


function test1Undefined() {
  for (let i = 0; i < 200; ++i) {
    let r = one.apply(null, undefined);
    assertEq(r, 1);
  }
}
for (let i = 0; i < 2; ++i) test1Undefined();
