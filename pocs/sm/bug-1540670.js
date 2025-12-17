;

print(
  () => gcparam('minNurseryBytes', 0),
  Error,
  "Parameter value out of range");

gczeal(4);

