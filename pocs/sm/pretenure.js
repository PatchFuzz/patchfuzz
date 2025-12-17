const is64bit = getBuildConfiguration("pointer-byte-size") === 8;


const nurseryCount = is64bit ? 25000 : 50000;


const tenuredCount = is64bit ? 400000 : 800000;

function setupPretenureTest() {
  
  
  let jitOptions = getJitCompilerOptions();
  if (!jitOptions['baseline.enable'] ||
      jitOptions['ion.warmup.trigger'] <= jitOptions['baseline.warmup.trigger']) {
    print("Unsupported JIT options");
    quit();
  }

  
  gczeal(0);

  setJitCompilerOption("offthread-compilation.enable", 0)

  
  let size = 1024 * 1024;
  if (gcparam("semispaceNurseryEnabled")) {
    size *= 2;
  }
  gcparam("minNurseryBytes", size);
  gcparam("maxNurseryBytes", size);

  
  gcparam("allocationThreshold", 1 );

  
  gcparam("incrementalGCEnabled", false);

  
  gcparam("balancedHeapLimitsEnabled", false);

  
  let o = {};

  
  
  
  gc(undefined, 'shrinking');
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
  let major = gcparam("majorGCNumber")
  let minor = gcparam("minorGCNumber");

  
  print(minor >= major, true);
  minor -= major;

  return { minor, major };
}

function runTestAndCountCollections(thunk) {
  let initialCounts = gcCounts();
  thunk();
  let finalCounts = gcCounts();
  return { minor: finalCounts.minor - initialCounts.minor,
           major: finalCounts.major - initialCounts.major };
}
