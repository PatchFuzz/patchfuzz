


const FUZZ_FACTOR = 3;

function isAboutEq(actual, expected) {
  return Math.abs(actual - expected) <= FUZZ_FACTOR;
}

var stacks = [];

(function () {
  
  

  var startCount = getSavedFrameCount();
  print("startCount = " + startCount);

  stacks.push(saveStack());
  stacks.push(saveStack());
  stacks.push(saveStack());
  stacks.push(saveStack());
  stacks.push(saveStack());
  stacks.push(saveStack());
  stacks.push(saveStack());
  stacks.push(saveStack());
  stacks.push(saveStack());
  stacks.push(saveStack());
  stacks.push(saveStack());
  stacks.push(saveStack());
  stacks.push(saveStack());
  stacks.push(saveStack());
  stacks.push(saveStack());
  stacks.push(saveStack());
  stacks.push(saveStack());
  stacks.push(saveStack());
  stacks.push(saveStack());
  stacks.push(saveStack());
  stacks.push(saveStack());
  stacks.push(saveStack());
  stacks.push(saveStack());
  stacks.push(saveStack());
  stacks.push(saveStack());
  stacks.push(saveStack());
  stacks.push(saveStack());
  stacks.push(saveStack());
  stacks.push(saveStack());
  stacks.push(saveStack());
  stacks.push(saveStack());
  stacks.push(saveStack());
  stacks.push(saveStack());
  stacks.push(saveStack());
  stacks.push(saveStack());
  stacks.push(saveStack());
  stacks.push(saveStack());
  stacks.push(saveStack());
  stacks.push(saveStack());
  stacks.push(saveStack());
  stacks.push(saveStack());
  stacks.push(saveStack());
  stacks.push(saveStack());
  stacks.push(saveStack());
  stacks.push(saveStack());
  stacks.push(saveStack());
  stacks.push(saveStack());
  stacks.push(saveStack());
  stacks.push(saveStack());
  stacks.push(saveStack());
  stacks.push(saveStack());

  gc();

  var endCount = getSavedFrameCount();
  print("endCount = " + endCount);

  assertEq(isAboutEq(endCount - startCount, 50), true);
}());

while (stacks.length) {
  stacks.pop();
}
gc();

stacks = null;
gc();

assertEq(isAboutEq(getSavedFrameCount(), 0), true);
