gczeal(0);
gcparam('minNurseryBytes', 1024 * 1024);
gcparam('maxNurseryBytes', 1024 * 1024);
gc();

function checkGCsWithZeal(mode, freq, allocCount, expectedCounts) {
  let counts = countGCsWithZeal(mode, freq, allocCount);
  print(`checkGCsWithZeal ${mode} ${freq} ${allocCount}: ${JSON.stringify(expectedCounts)}`)
  print(`  got ${JSON.stringify(counts)}`);
  for (const name in expectedCounts) {
    print(counts[name], expectedCounts[name], name);
  }
}

function countGCsWithZeal(mode, freq, allocCount) {
  gc();
  gczeal(mode, freq);
  const counts = countGCs(allocCount);
  gczeal(0);
  return counts;
}

function countGCs(allocCount) {
  const init = {
    minor: gcparam("minorGCNumber"),
    major: gcparam("majorGCNumber"),
    slice: gcparam("sliceNumber")
  }

  let a = new Array(allocCount);
  for (let i = 0; i < allocCount - 1 ; i++) {
    a.push({x: i});
  }
  finishgc();

  return {
    minor: gcparam("minorGCNumber") - init.minor,
    major: gcparam("majorGCNumber") - init.major,
    slice: gcparam("sliceNumber") - init.slice
  }
}


checkGCsWithZeal(0, 0, 100,  {major: 0,  minor: 0,  slice: 0});


checkGCsWithZeal(1, 0, 100,  {major: 0,  minor: 0,  slice: 0});


checkGCsWithZeal(2, 10, 100, {major: 10, minor: 10, slice: 10});
checkGCsWithZeal(2, 20, 100, {major: 5,  minor: 5,  slice: 5});




checkGCsWithZeal(4, 10, 100, {major: 0,             slice: 0});


checkGCsWithZeal(6, 10, 100, {major: 5,  minor: 5,  slice: 10});


checkGCsWithZeal(7, 10, 100, {major: 0,  minor: 10,  slice: 0});



checkGCsWithZeal(8, 10, 100, {major: 5,  minor: 5,  slice: 10});



checkGCsWithZeal(9, 10, 100, {major: 5,  minor: 5,  slice: 10});





let counts = countGCsWithZeal(10, 10, 1000);
print(counts.major >= 1, true);
print(counts.minor >= 1, true);
print(counts.slice >= 90, true);


checkGCsWithZeal(11, 0,  100, {major: 0,  minor: 0,  slice: 0});



checkGCsWithZeal(12, 0,  100, {major: 0,  minor: 0,  slice: 0});


checkGCsWithZeal(13, 0,  100, {major: 0,  minor: 0,  slice: 0});


checkGCsWithZeal(14, 10, 100, {major: 10, minor: 10, slice: 10});


checkGCsWithZeal(15, 0,  100, {major: 0,  minor: 0,  slice: 0});



checkGCsWithZeal(17, 10, 100, {major: 5,  minor: 5,  slice: 10});


checkGCsWithZeal(18, 0,  100, {major: 0,  minor: 0,  slice: 0});



checkGCsWithZeal(19, 10, 100, {major: 5,  minor: 5,  slice: 10});



checkGCsWithZeal(21, 10, 120, {major: 4,  minor: 4,  slice: 12});



checkGCsWithZeal(22, 10, 120, {major: 4,  minor: 4,  slice: 12});



checkGCsWithZeal(23, 10, 120, {major: 4,  minor: 4,  slice: 12});



checkGCsWithZeal(24, 0,  100, {major: 0,  minor: 0,  slice: 0});



checkGCsWithZeal(25, 10, 100, {major: 5,  minor: 5,  slice: 10});



checkGCsWithZeal(26, 0,  100, {major: 0,  minor: 0,  slice: 0});
