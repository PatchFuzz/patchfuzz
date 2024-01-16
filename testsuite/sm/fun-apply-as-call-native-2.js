




function testThisAbsent() {
  let xs = [Math.min, Math.max];
  let ys = [Infinity, -Infinity];
  for (let i = 0; i < 200; ++i) {
    let r = xs[i & 1].apply();
    assertEq(r, ys[i & 1]);
  }
}
for (let i = 0; i < 2; ++i) testThisAbsent();

function test0() {
  let xs = [Math.min, Math.max];
  let ys = [Infinity, -Infinity];
  for (let i = 0; i < 200; ++i) {
    let r = xs[i & 1].apply(null);
    assertEq(r, ys[i & 1]);
  }
}
for (let i = 0; i < 2; ++i) test0();


function test1Null() {
  let xs = [Math.min, Math.max];
  let ys = [Infinity, -Infinity];
  for (let i = 0; i < 200; ++i) {
    let r = xs[i & 1].apply(null, null);
    assertEq(r, ys[i & 1]);
  }
}
for (let i = 0; i < 2; ++i) test1Null();


function test1Undefined() {
  let xs = [Math.min, Math.max];
  let ys = [Infinity, -Infinity];
  for (let i = 0; i < 200; ++i) {
    let r = xs[i & 1].apply(null, undefined);
    assertEq(r, ys[i & 1]);
  }
}
for (let i = 0; i < 2; ++i) test1Undefined();
