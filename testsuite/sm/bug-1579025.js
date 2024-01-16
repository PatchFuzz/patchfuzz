

function waitForState(state) {
  while (gcstate() !== state && gcstate() !== "NotActive") {
    gcslice(100);
  }
}

gczeal(0);
gc();

let z1 = this;
let z2 = newGlobal({newCompartment: true});



assertEq(gcstate(), "NotActive");
assertEq(gcstate(z1), "NoGC");
assertEq(gcstate(z2), "NoGC");



startgc(1);


waitForState("Mark");

assertEq(gcstate(), "Mark");
assertEq(gcstate(z1), "MarkBlackOnly");
assertEq(gcstate(z2), "MarkBlackOnly");
finishgc();



schedulezone(z1);
startgc(1);
waitForState("Mark");
assertEq(gcstate(), "Mark");
assertEq(gcstate(z1), "MarkBlackOnly");
assertEq(gcstate(z2), "NoGC");
finishgc();

schedulezone(z2);
startgc(1);
waitForState("Mark");
assertEq(gcstate(), "Mark");
assertEq(gcstate(z1), "NoGC");
assertEq(gcstate(z2), "MarkBlackOnly");
finishgc();

schedulezone(z1);
schedulezone(z2);
startgc(1);
waitForState("Mark");
assertEq(gcstate(), "Mark");
assertEq(gcstate(z1), "MarkBlackOnly");
assertEq(gcstate(z2), "MarkBlackOnly");
finishgc();
