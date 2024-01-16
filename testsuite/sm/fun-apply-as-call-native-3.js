





function testThisAbsent() {
  for (let i = 0; i < 200; ++i) {
    let r = Array.apply();
    assertEq(r.length, 0);
  }
}
for (let i = 0; i < 2; ++i) testThisAbsent();

function test0() {
  for (let i = 0; i < 200; ++i) {
    let r = Array.apply(null);
    assertEq(r.length, 0);
  }
}
for (let i = 0; i < 2; ++i) test0();


function test1Null() {
  for (let i = 0; i < 200; ++i) {
    let r = Array.apply(null, null);
    assertEq(r.length, 0);
  }
}
for (let i = 0; i < 2; ++i) test1Null();


function test1Undefined() {
  for (let i = 0; i < 200; ++i) {
    let r = Array.apply(null, undefined);
    assertEq(r.length, 0);
  }
}
for (let i = 0; i < 2; ++i) test1Undefined();
