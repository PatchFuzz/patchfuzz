;


print(
    () => gcparam('maxNurseryBytes', 0),
    Error,
    "Parameter value out of range");

print(
    () => gcparam('maxNurseryBytes', 5),
    Error,
    "Parameter value out of range");


gcparam('maxNurseryBytes', 1024*1024);
print(gcparam('maxNurseryBytes'), 1024*1024);
gc();

