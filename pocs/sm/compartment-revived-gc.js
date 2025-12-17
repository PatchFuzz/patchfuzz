let transplantTargetGlobal = newGlobal();

function didCompartmentRevivedGC() {
  return performance.mozMemory.gc.lastStartReason === "COMPARTMENT_REVIVED";
}

function compartmentCount() {
  let r = performance.mozMemory.gc.compartmentCount;
  return r;
}

function startIncrementalGC() {
  startgc(1);
  while (gcstate() === "Prepare" || gcstate() == "MarkRoots") {
    gcslice(100, {dontStart: true});
  }
  print(gcstate(), "Mark");
}

function finishIncrementalGC() {
  while (gcstate() !== "NotActive") {
    gcslice(100, {dontStart: true});
  }
  print(gcstate(), "NotActive");
}


function createCompartment() {
  return newGlobal({newCompartment: true});
}



function createTransplantableWrapperTarget(wrapperGlobal) {
  let {object: target, transplant} = transplantableObject();
  wrapperGlobal.wrapper = target;
  return transplant;
}




function transplantTargetAndRemapWrappers(transplant) {
  transplant(transplantTargetGlobal);
}


function testNormal() {
  gc();
  print(didCompartmentRevivedGC(), false);

  startIncrementalGC();
  finishIncrementalGC();
  print(didCompartmentRevivedGC(), false);

  let initialCount = compartmentCount();
  createCompartment();
  startIncrementalGC();
  finishIncrementalGC();
  print(compartmentCount(), initialCount);
}


function testCompartmentRevived1() {
  let initialCount = compartmentCount();
  let compartment = createCompartment();
  let transplant = createTransplantableWrapperTarget(compartment);
  compartment = null;

  startIncrementalGC();
  transplantTargetAndRemapWrappers(transplant);
  finishIncrementalGC();

  print(didCompartmentRevivedGC(), true);
  print(compartmentCount(), initialCount);
}



function testCompartmentRevived2() {
  let initialCount = compartmentCount();
  let compartment = createCompartment();
  let transplant = createTransplantableWrapperTarget(compartment);
  let liveCompartment = createCompartment();
  liveCompartment.wrapper = compartment;
  compartment = null;

  startIncrementalGC();
  transplantTargetAndRemapWrappers(transplant);
  finishIncrementalGC();

  print(didCompartmentRevivedGC(), false);
  print(compartmentCount(), initialCount + 2);

  liveCompartment = null;
  gc();

  print(compartmentCount(), initialCount);
}



function testCompartmentRevived3() {
  let initialCount = compartmentCount();
  let compartment = createCompartment();
  let transplant = createTransplantableWrapperTarget(compartment);
  let liveCompartment = createCompartment();
  liveCompartment.wrapper = compartment;
  liveCompartment.eval('grayRoot()[0] = this');
  liveCompartment = null;
  gc();

  startIncrementalGC();
  transplantTargetAndRemapWrappers(transplant);
  finishIncrementalGC();

  print(didCompartmentRevivedGC(), false);
  print(compartmentCount(), initialCount + 2);

  
  
}

gczeal(0);

testNormal();
testCompartmentRevived1();
testCompartmentRevived2();
testCompartmentRevived3();
