

function assert(x) {
  assertEq(true, x);
}

function waitForState(state) {
  while (gcstate() !== state && gcstate() !== "NotActive") {
    gcslice(100);
  }
}


gczeal(0);


gc();
assertEq(gcstate(), "NotActive");



gcslice(1000000);
assert(gcstate() !== "Mark");
finishgc();
assertEq(gcstate(), "NotActive");



gczeal(0);
gcslice(1);
waitForState("Mark");
assertEq(gcstate(), "Mark");
gcslice(1000000);
assertEq(gcstate(), "Mark");
gcslice(1000000);
assert(gcstate() !== "Mark");
finishgc();




gczeal(6, 0);
gcslice(1);
assertEq(gcstate(), "Prepare");
gcslice(1);
assertEq(gcstate(), "NotActive");




gczeal(8, 0);
gcslice(1);
assertEq(gcstate(), "Mark");
gcslice(1);
assertEq(gcstate(), "NotActive");




gczeal(9, 0);
gcslice(1);
assertEq(gcstate(), "Mark");
gcslice(1);
assertEq(gcstate(), "NotActive");




gczeal(10, 0);
gcslice(1000000);
while (gcstate() === "Prepare") {
  gcslice(1000000);
}
assertEq(gcstate(), "Sweep");
gcslice(1000000);
assert(gcstate() !== "Sweep");
finishgc();


for (let mode of [ 17, 19 ]) {
    gczeal(mode, 0);
    gcslice(1);
    assertEq(gcstate(), "Sweep");
    gcslice(1);
    assertEq(gcstate(), "NotActive");
}


const sweepingZealModes = [ 20, 21, 22, 23 ];
for (let mode of sweepingZealModes) {
    gczeal(mode, 0);
    gcslice(1);
    while (gcstate() === "Sweep")
        gcslice(1);
    assertEq(gcstate(), "NotActive");
}
