function waitForState(state) {
  while (gcstate() !== state && gcstate() !== "NotActive") {
    gcslice(100);
  }
}

gczeal(0);
gc();

let z1 = this;
let z2 = newGlobal({newCompartment: true});



print(gcstate(), "NotActive");
print(gcstate(z1), "NoGC");
print(gcstate(z2), "NoGC");



startgc(1);


waitForState("Mark");

print(gcstate(), "Mark");
print(gcstate(z1), "MarkBlackOnly");
print(gcstate(z2), "MarkBlackOnly");
finishgc();



schedulezone(z1);
startgc(1);
waitForState("Mark");
print(gcstate(), "Mark");
print(gcstate(z1), "MarkBlackOnly");
print(gcstate(z2), "NoGC");
finishgc();

schedulezone(z2);
startgc(1);
waitForState("Mark");
print(gcstate(), "Mark");
print(gcstate(z1), "NoGC");
print(gcstate(z2), "MarkBlackOnly");
finishgc();

schedulezone(z1);
schedulezone(z2);
startgc(1);
waitForState("Mark");
print(gcstate(), "Mark");
print(gcstate(z1), "MarkBlackOnly");
print(gcstate(z2), "MarkBlackOnly");
finishgc();
