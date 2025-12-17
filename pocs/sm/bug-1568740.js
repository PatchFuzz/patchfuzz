gczeal(0);
gcparam("semispaceNurseryEnabled", 0);

function setAndTest(param, value) {
  gcparam(param, value);
  print(gcparam(param), value);
}


setAndTest("maxNurseryBytes", 1024*1024);
setAndTest("minNurseryBytes", 1024*1024);
minorgc();
print(gcparam("nurseryBytes"), 1024*1024);


setAndTest("minNurseryBytes", 64*1024);
setAndTest("maxNurseryBytes", 64*1024);
minorgc();
print(gcparam("nurseryBytes"), 64*1024);

