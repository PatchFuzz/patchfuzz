
load(libdir + "asserts.js");

assertErrorMessage(
  () => gcparam('minNurseryBytes', 0),
  Error,
  "Parameter value out of range");

assertErrorMessage(
  () => gcparam('maxNurseryBytes', 256*1024*1024),
  Error,
  "Parameter value out of range");



assertErrorMessage(
  () => gcparam('minNurseryBytes', 256*1024*1024),
  Error,
  "Parameter value out of range");

