gczeal(0); 

var maps = Array(1000).fill().map(() => new WeakMap);
for (const map of maps) {
    for (let i = 0; i < 100; i++) {
        map.set({}, {}); 
    }
}


startgc(10);
while (["Prepare", "MarkRoots"].includes(gcstate())) {
    gcslice(10);
}
print(gcstate(), "Mark");



print("gcslice(10000) #1");
gcslice(10000);
print(gcstate(), "Mark");



print("gcslice(10000) #2");
gcslice(10000);
print(gcstate(), "Sweep");
hasFunction["currentgc"] && print(currentgc().finishMarkingDuringSweeping, true);




print("gcslice(1) #3");


gcslice(100);
print(gcstate(), "Sweep");
hasFunction["currentgc"] && print(currentgc().finishMarkingDuringSweeping, false);



finishgc();





startgc(10);
while (["Prepare", "MarkRoots"].includes(gcstate())) {
    gcslice(10);
}
print(gcstate(), "Mark");

gcslice(10000);
print(gcstate(), "Mark");

gcslice(1);
print(gcstate(), "Sweep");
hasFunction["currentgc"] && print(currentgc().finishMarkingDuringSweeping, false);

gcslice(1);
print(gcstate(), "Sweep");
hasFunction["currentgc"] && print(currentgc().finishMarkingDuringSweeping, false);
