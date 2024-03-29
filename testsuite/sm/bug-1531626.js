





load(libdir + "asserts.js");

const chunkSizeKB = gcparam('chunkBytes') / 1024;
const pageSizeKB = gcparam('systemPageSizeKB');

var testSizesKB = [128, 129, 255, 256, 516, 1023, 1024, 3*1024, 4*1024+1, 16*1024];


var testMaxSizesKB = testSizesKB.filter(x => x >= 1024);

for (var max of testMaxSizesKB) {
  
  for (var min of testSizesKB.filter(x => x <= max)) {
    setMinMax(min, max);
  }
}



gcparam('minNurseryBytes', 256*1024); 
setMinMax(256, 1024);


assertErrorMessage(
  () => setMinMax(2*1024, 1024),
  Object,
  "Parameter value out of range");

function setMinMax(min, max) {
  
  gcparam('maxNurseryBytes', max * 1024);
  gcparam('minNurseryBytes', min * 1024);
  assertEq(gcparam('maxNurseryBytes'), nearestLegalSize(max) * 1024);
  assertEq(gcparam('minNurseryBytes'), nearestLegalSize(min) * 1024);
  allocateSomeThings();
  gc();
}

function allocateSomeThings() {
  for (var i = 0; i < 1000; i++) {
    var obj = { an: 'object', with: 'fields' };
  }
}

function nearestLegalSize(sizeKB) {
  let step = sizeKB >= chunkSizeKB ? chunkSizeKB : pageSizeKB;
  return round(sizeKB, step);
}

function round(x, y) {
  x += y / 2;
  return x - (x % y);
}
