







load(libdir + "asserts.js");

assertErrorMessage(
  () => gcparam('minNurseryBytes', 0),
  Error,
  "Parameter value out of range");

gczeal(4);

