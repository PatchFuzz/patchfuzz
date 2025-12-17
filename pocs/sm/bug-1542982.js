;

print(
  () => gcparam('minNurseryBytes', 0),
  Error,
  "Parameter value out of range");

print(
  () => gcparam('maxNurseryBytes', 256*1024*1024),
  Error,
  "Parameter value out of range");



print(
  () => gcparam('minNurseryBytes', 256*1024*1024),
  Error,
  "Parameter value out of range");

