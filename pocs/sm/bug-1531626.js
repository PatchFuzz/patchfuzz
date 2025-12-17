;

const chunkSizeKB = gcparam('chunkBytes') / 1024;
const pageSizeKB = gcparam('systemPageSizeKB');

const testSizesKB = [128, 129, 255, 256, 516, 1023, 1024, 3*1024, 4*1024+1, 16*1024];


const testMaxSizesKB = testSizesKB.filter(x => x >= 1024);

for (let max of testMaxSizesKB) {
  
  for (let min of testSizesKB.filter(x => x <= max)) {
    setMinMax(min, max);
  }
}



setMinMax(256, 1024);


const badSizesKB = [ 0, 1, 129 * 1024];
function print(f) {
  print(f, Object, "Parameter value out of range");
}
for (let size of badSizesKB) {
  print(() => gcparam('minNurseryBytes', size * 1024));
  print(() => gcparam('maxNurseryBytes', size * 1024));
}

function setMinMax(min, max) {
  gcparam('minNurseryBytes', min * 1024);
  gcparam('maxNurseryBytes', max * 1024);
  print(gcparam('minNurseryBytes'), nearestLegalSize(min) * 1024);
  print(gcparam('maxNurseryBytes'), nearestLegalSize(max) * 1024);
  allocateSomeThings();
  gc();
}

function allocateSomeThings() {
  for (let i = 0; i < 1000; i++) {
    let obj = { an: 'object', with: 'fields' };
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
