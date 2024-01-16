

setJitCompilerOption("baseline.warmup.trigger", 9);
setJitCompilerOption("ion.warmup.trigger", 20);


gczeal(0);


const maxBitLength = 1024 * 1024;

const maxBigInt = BigInt.asUintN(maxBitLength, -1n);
const minBigInt = -maxBigInt;

function resumeHere() {}

function bigIntAddBail(i) {
  var x = [0n, maxBigInt][0 + (i >= 99)];

  var a = x + 1n;

  
  
  
  resumeHere();

  if (i >= 99) bailout();
}

function bigIntSubBail(i) {
  var x = [0n, minBigInt][0 + (i >= 99)];

  var a = x - 1n;

  
  
  
  resumeHere();

  if (i >= 99) bailout();
}

function bigIntMulBail(i) {
  var x = [0n, maxBigInt][0 + (i >= 99)];

  var a = x * 2n;

  
  
  
  resumeHere();

  if (i >= 99) bailout();
}

function bigIntIncBail(i) {
  var x = [0n, maxBigInt][0 + (i >= 99)];

  var a = x++;

  
  
  
  resumeHere();

  if (i >= 99) bailout();
}

function bigIntDecBail(i) {
  var x = [0n, minBigInt][0 + (i >= 99)];

  var a = x--;

  
  
  
  resumeHere();

  if (i >= 99) bailout();
}

function bigIntBitNotBail(i) {
  var x = [0n, maxBigInt][0 + (i >= 99)];

  var a = ~x;

  
  
  
  resumeHere();

  if (i >= 99) bailout();
}

function bigIntLshBail(i) {
  var shift = [0n, BigInt(maxBitLength)][0 + (i >= 99)];

  var a = 1n << shift;

  
  
  
  resumeHere();

  if (i >= 99) bailout();
}

function bigIntRshBail(i) {
  var shift = [0n, -BigInt(maxBitLength)][0 + (i >= 99)];

  var a = 1n >> shift;

  
  
  
  resumeHere();

  if (i >= 99) bailout();
}

function bigIntAsUintBail(i) {
  var x = [0, maxBitLength + 1][0 + (i >= 99)];

  var a = BigInt.asUintN(x, -1n);

  
  
  
  resumeHere();

  if (i >= 99) bailout();
}


eval(`(${resumeHere})`);





try {
  for (let i = 0; i < 100; i++) {
    bigIntAddBail(i);
  }
  throw new Error("missing exception");
} catch (e) {
  assertEq(e instanceof RangeError || e === "out of memory", true, String(e));
}

try {
  for (let i = 0; i < 100; i++) {
    bigIntSubBail(i);
  }
  throw new Error("missing exception");
} catch (e) {
  assertEq(e instanceof RangeError || e === "out of memory", true, String(e));
}

try {
  for (let i = 0; i < 100; i++) {
    bigIntMulBail(i);
  }
  throw new Error("missing exception");
} catch (e) {
  assertEq(e instanceof RangeError || e === "out of memory", true, String(e));
}

try {
  for (let i = 0; i < 100; i++) {
    bigIntIncBail(i);
  }
  throw new Error("missing exception");
} catch (e) {
  assertEq(e instanceof RangeError || e === "out of memory", true, String(e));
}

try {
  for (let i = 0; i < 100; i++) {
    bigIntDecBail(i);
  }
  throw new Error("missing exception");
} catch (e) {
  assertEq(e instanceof RangeError || e === "out of memory", true, String(e));
}

try {
  for (let i = 0; i < 100; i++) {
    bigIntBitNotBail(i);
  }
  throw new Error("missing exception");
} catch (e) {
  assertEq(e instanceof RangeError || e === "out of memory", true, String(e));
}

try {
  for (let i = 0; i < 100; i++) {
    bigIntLshBail(i);
  }
  throw new Error("missing exception");
} catch (e) {
  assertEq(e instanceof RangeError || e === "out of memory", true, String(e));
}

try {
  for (let i = 0; i < 100; i++) {
    bigIntRshBail(i);
  }
  throw new Error("missing exception");
} catch (e) {
  assertEq(e instanceof RangeError || e === "out of memory", true, String(e));
}

try {
  for (let i = 0; i < 100; i++) {
    bigIntAsUintBail(i);
  }
  throw new Error("missing exception");
} catch (e) {
  assertEq(e instanceof RangeError || e === "out of memory", true, String(e));
}
