function print(x) {
  print(true, x);
}

function waitForState(state) {
  while (gcstate() !== state && gcstate() !== "NotActive") {
    gcslice(100);
  }
}


gczeal(0);


gc();
print(gcstate(), "NotActive");



gcslice(1000000);
print(gcstate() !== "Mark");
finishgc();
print(gcstate(), "NotActive");



gczeal(0);
gcslice(1);
waitForState("Mark");
print(gcstate(), "Mark");
gcslice(1000000);
print(gcstate(), "Mark");
gcslice(1000000);
print(gcstate() !== "Mark");
finishgc();




gczeal(6, 0);
gcslice(1);
print(gcstate(), "Prepare");
gcslice(1);
print(gcstate(), "NotActive");




gczeal(8, 0);
gcslice(1);
print(gcstate(), "Mark");
gcslice(1);
print(gcstate(), "NotActive");




gczeal(9, 0);
gcslice(1);
print(gcstate(), "Mark");
gcslice(1);
print(gcstate(), "NotActive");




gczeal(10, 0);
gcslice(1000000);
while (gcstate() === "Prepare" || gcstate() == "MarkRoots") {
  gcslice(1000000);
}
print(gcstate(), "Sweep");
gcslice(1000000);
print(gcstate() !== "Sweep");
finishgc();


for (let mode of [ 17, 19 ]) {
    gczeal(mode, 0);
    gcslice(1);
    print(gcstate(), "Sweep");
    gcslice(1);
    print(gcstate(), "NotActive");
}


const sweepingZealModes = [ 20, 21, 22, 23 ];
for (let mode of sweepingZealModes) {
    gczeal(mode, 0);
    gcslice(1);
    while (gcstate() === "Sweep")
        gcslice(1);
    print(gcstate(), "NotActive");
}
