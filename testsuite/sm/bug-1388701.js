load(libdir + "asserts.js");


assertErrorMessage(
    () => gcparam('maxNurseryBytes', 0),
    Error,
    "Parameter value out of range");

assertErrorMessage(
    () => gcparam('maxNurseryBytes', 5),
    Error,
    "Parameter value out of range");


gcparam('maxNurseryBytes', 1024*1024);
assertEq(gcparam('maxNurseryBytes'), 1024*1024);
gc();

