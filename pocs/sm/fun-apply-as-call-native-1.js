function testThisAbsent() {
  for (let i = 0; i < 200; ++i) {
    let r = Math.min.apply();
    print(r, Infinity);
  }
}
for (let i = 0; i < 2; ++i) testThisAbsent();

function test0() {
  for (let i = 0; i < 200; ++i) {
    let r = Math.min.apply(null);
    print(r, Infinity);
  }
}
for (let i = 0; i < 2; ++i) test0();


function test1Null() {
  for (let i = 0; i < 200; ++i) {
    let r = Math.min.apply(null, null);
    print(r, Infinity);
  }
}
for (let i = 0; i < 2; ++i) test1Null();


function test1Undefined() {
  for (let i = 0; i < 200; ++i) {
    let r = Math.min.apply(null, undefined);
    print(r, Infinity);
  }
}
for (let i = 0; i < 2; ++i) test1Undefined();
