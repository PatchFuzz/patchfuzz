function createOtherCompartment() {
    let t = {};
    addMarkObservers([t]);
    let g = newGlobal({newCompartment: true});
    g.t = t;
    g.eval(`grayRoot().push(t);`);
    g.t = null;
    t = null;
    return g;
}

function startGCMarking() {
  startgc(1);
  while (gcstate() === "Prepare" || gcstate() === "MarkRoots") {
    gcslice(1);
  }
}

gczeal(0);

let g = createOtherCompartment();


gc();
print(getMarks()[0], "gray");


gc(this);
print(getMarks()[0], "gray");



schedulezone(this);
startGCMarking()
print(getMarks()[0], "unmarked");
g.eval(`grayRoot()`); 
print(getMarks()[0], "black");
finishgc();


gc();
print(getMarks()[0], "gray");



gczeal(25); 
schedulezone(this);
startGCMarking();
print(getMarks()[0], "gray");
g.eval(`grayRoot()`); 
print(getMarks()[0], "black");
finishgc();
