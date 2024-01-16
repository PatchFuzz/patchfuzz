



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
  while (gcstate() === "Prepare") {
    gcslice(100, {dontStart: true});
  }
  assertEq(gcstate(), "Mark");
}

function finishIncrementalGC() {
  while (gcstate() !== "NotActive") {
    gcslice(100, {dontStart: true});
  }
  assertEq(gcstate(), "NotActive");
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
  assertEq(didCompartmentRevivedGC(), false);

  startIncrementalGC();
  finishIncrementalGC();
  assertEq(didCompartmentRevivedGC(), false);

  let initialCount = compartmentCount();
  createCompartment();
  startIncrementalGC();
  finishIncrementalGC();
  assertEq(compartmentCount(), initialCount);
}


function testCompartmentRevived1() {
  let initialCount = compartmentCount();
  let compartment = createCompartment();
  let transplant = createTransplantableWrapperTarget(compartment);
  compartment = null;

  startIncrementalGC();
  transplantTargetAndRemapWrappers(transplant);
  finishIncrementalGC();

  assertEq(didCompartmentRevivedGC(), true);
  assertEq(compartmentCount(), initialCount);
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

  assertEq(didCompartmentRevivedGC(), false);
  assertEq(compartmentCount(), initialCount + 2);

  liveCompartment = null;
  gc();

  assertEq(compartmentCount(), initialCount);
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

  assertEq(didCompartmentRevivedGC(), false);
  assertEq(compartmentCount(), initialCount + 2);

  
  
}

gczeal(0);

testNormal();
testCompartmentRevived1();
testCompartmentRevived2();
testCompartmentRevived3();
