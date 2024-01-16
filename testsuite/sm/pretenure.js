

const is64bit = getBuildConfiguration()['pointer-byte-size'] === 8;


const nurseryCount = is64bit ? 25000 : 50000;


const tenuredCount = is64bit ? 300000 : 600000;

function setupPretenureTest() {
  
  
  let jitOptions = getJitCompilerOptions();
  if (!jitOptions['baseline.enable'] ||
      jitOptions['ion.warmup.trigger'] <= jitOptions['baseline.warmup.trigger']) {
    print("Unsupported JIT options");
    quit();
  }

  
  gczeal(0);

  
  gcparam("minNurseryBytes", 1024 * 1024);
  gcparam("maxNurseryBytes", 1024 * 1024);

  
  gcparam("allocationThreshold", 1 );

  
  gcparam("incrementalGCEnabled", false);

  
  gcparam("balancedHeapLimitsEnabled", false);

  
  let o = {};

  gc();
}

function allocateObjects(count, longLived) {
  let array = new Array(nurseryCount);
  for (let i = 0; i < count; i++) {
    let x = {x: i};
    if (longLived) {
      array[i % nurseryCount] = x;
    } else {
      array[0] = x;
    }
  }
  return array;
}

function allocateArrays(count, longLived) {
  let array = new Array(nurseryCount);
  for (let i = 0; i < count; i++) {
    let x = [i];
    if (longLived) {
      array[i % nurseryCount] = x;
    } else {
      array[0] = x;
    }
  }
  return array;
}

function gcCounts() {
  return { minor: gcparam("minorGCNumber"),
           major: gcparam("majorGCNumber") };
}

function runTestAndCountCollections(thunk) {
  let initialCounts = gcCounts();
  thunk();
  let finalCounts = gcCounts();
  return { minor: finalCounts.minor - initialCounts.minor,
           major: finalCounts.major - initialCounts.major };
}
