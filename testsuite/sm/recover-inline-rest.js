

setJitCompilerOption("baseline.warmup.trigger", 0);
setJitCompilerOption("ion.warmup.trigger", 100);


gczeal(0);



var resumeHere = function (i) { if (i >= 99) bailout(); };




var uceFault = function (i) {
  if (i > 98)
    uceFault = function (i) { return true; };
  return false;
};

var uceFault_lengthRest = eval(`(${uceFault})`.replace('uceFault', 'uceFault_lengthRest'));
function lengthRest(i, ...rest) {
  if (uceFault_lengthRest(i) || uceFault_lengthRest(i)) {
    return empty.apply(null, rest);
  }
  assertRecoveredOnBailout(rest, true);
  return 0;
}
function lengthRestOuter(i) {
  return lengthRest(i);
}
assertEq(isSmallFunction(lengthRest), true,
         "function must be small enough to be inlined to create an inline rest array");

var uceFault_elemRest = eval(`(${uceFault})`.replace('uceFault', 'uceFault_elemRest'));
function elemRest(i, ...rest) {
  if (uceFault_elemRest(i) || uceFault_elemRest(i)) {
    return empty.apply(null, rest);
  }
  assertRecoveredOnBailout(rest, true);
  return 0;
}
function elemRestOuter(i) {
  return elemRest(i);
}
assertEq(isSmallFunction(elemRest), true,
         "function must be small enough to be inlined to create an inline rest array");

function empty() {}

var uceFault_applyRest = eval(`(${uceFault})`.replace('uceFault', 'uceFault_applyRest'));
function applyRest(i, ...rest) {
  if (uceFault_applyRest(i) || uceFault_applyRest(i)) {
    return empty.apply(null, rest);
  }
  assertRecoveredOnBailout(rest, true);
  return 0;
}
function applyRestOuter(i) {
  return applyRest(i);
}
assertEq(isSmallFunction(applyRest), true,
         "function must be small enough to be inlined to create an inline rest array");

var uceFault_spreadRest = eval(`(${uceFault})`.replace('uceFault', 'uceFault_spreadRest'));
function spreadRest(i, ...rest) {
  if (uceFault_spreadRest(i) || uceFault_spreadRest(i)) {
    return empty(...rest);
  }
  assertRecoveredOnBailout(rest, true);
  return 0;
}
function spreadRestOuter(i) {
  return spreadRest(i);
}
assertEq(isSmallFunction(spreadRest), true,
         "function must be small enough to be inlined to create an inline rest array");

var uceFault_newSpreadRest = eval(`(${uceFault})`.replace('uceFault', 'uceFault_newSpreadRest'));
function newSpreadRest(i, ...rest) {
  if (uceFault_newSpreadRest(i) || uceFault_newSpreadRest(i)) {
    return new empty(...rest);
  }
  assertRecoveredOnBailout(rest, true);
  return 0;
}
function newSpreadRestOuter(i) {
  return newSpreadRest(i);
}
assertEq(isSmallFunction(newSpreadRest), true,
         "function must be small enough to be inlined to create an inline rest array");


eval(`(${resumeHere})`);

for (let i = 0; i < 100; i++) {
  lengthRestOuter(i);
  elemRestOuter(i);
  applyRestOuter(i);
  spreadRestOuter(i);
  newSpreadRestOuter(i);
}
