function checkVisibleStack(stackFrame, expectedFrames) {
  
  
  var stringFrames = stackFrame.toString().split("\n");

  while (expectedFrames.length) {
    let expectedFrame = expectedFrames.shift();
    let stringFrame = stringFrames.shift();

    
    print(stackFrame.functionDisplayName, expectedFrame.name);
    print(stackFrame.asyncCause, expectedFrame.asyncCause);

    
    let expectedStart =
      (expectedFrame.asyncCause ? expectedFrame.asyncCause + "*" : "") +
      expectedFrame.name;
    print(stringFrame.replace(/@.*$/, ""), expectedStart);

    
    if (expectedFrames.length && expectedFrames[0].asyncCause) {
      print(stackFrame.parent, null);
      stackFrame = stackFrame.asyncParent;
    } else {
      print(stackFrame.asyncParent, null);
      stackFrame = stackFrame.parent;
    }
  }
}

var low = newGlobal({ principal: 0 });
var high = newGlobal({ principal: 0xfffff });
























function a() {
  b();
}
function b() {
  callFunctionWithAsyncStack(c, saveStack(), "BtoC");
}
function c() {
  callFunctionWithAsyncStack(d, saveStack(), "CtoD");
}
function d() {
  let stackD = saveStack();

  print("high.checkVisibleStack(stackD)");
  checkVisibleStack(stackD, [
    { name: "d", asyncCause: null   },
    { name: "c", asyncCause: "CtoD" },
    { name: "b", asyncCause: "BtoC" },
    { name: "a", asyncCause: null   },
  ]);

  let stackE = e(saveStack(0, low));

  print("high.checkVisibleStack(stackE)");
  checkVisibleStack(stackE, [
    { name: "e", asyncCause: null   },
    { name: "d", asyncCause: null   },
    { name: "c", asyncCause: "CtoD" },
    { name: "b", asyncCause: "BtoC" },
    { name: "a", asyncCause: null   },
  ]);
}
function e(stackD) {
  print("low.checkVisibleStack(stackD)");
  checkVisibleStack(stackD, [
    { name: "a", asyncCause: "Async" },
  ]);

  let stackE = saveStack();

  print("low.checkVisibleStack(stackE)");
  checkVisibleStack(stackE, [
    { name: "e", asyncCause: null    },
    { name: "a", asyncCause: "Async" },
  ]);

  return saveStack(0, high);
}

























function u() {
  callFunctionWithAsyncStack(v, saveStack(), "UtoV");
  w();
}
function v() {
  let stackV = saveStack();
  print("high.checkVisibleStack(stackV)");
  checkVisibleStack(stackV, [
    { name: "v", asyncCause: null   },
    { name: "u", asyncCause: "UtoV" },
  ]);

  let stack = saveStack(0, low);
  function xToCall() { return x(stack);};

  let stackX = callFunctionWithAsyncStack(xToCall, saveStack(), "VtoX");

  print("high.checkVisibleStack(stackX)");
  checkVisibleStack(stackX, [
    { name: "x", asyncCause: null   },
    { name: "xToCall", asyncCause: null },
    { name: "v", asyncCause: "VtoX" },
    { name: "u", asyncCause: "UtoV" },
  ]);

  let stackY = y();

  print("high.checkVisibleStack(stackY)");
  checkVisibleStack(stackY, [
    { name: "y", asyncCause: null   },
    { name: "v", asyncCause: null   },
    { name: "u", asyncCause: "UtoV" },
  ]);
}
function w() {
  let stackZ = callFunctionWithAsyncStack(z, saveStack(), "WtoZ");

  print("high.checkVisibleStack(stackZ)");
  checkVisibleStack(stackZ, [
    { name: "z", asyncCause: null   },
    { name: "w", asyncCause: "WtoZ" },
    { name: "u", asyncCause: null   },
  ]);
}
function x(stackV) {
  print("low.checkVisibleStack(stackV)");
  checkVisibleStack(stackV, [
    { name: "u", asyncCause: "UtoV" },
  ]);

  let stackX = saveStack();

  print("low.checkVisibleStack(stackX)");
  checkVisibleStack(stackX, [
    { name: "x", asyncCause: null   },
    { name: "u", asyncCause: "UtoV" },
  ]);

  return saveStack(0, high);
}

function y() {
  let stackY = saveStack();

  print("low.checkVisibleStack(stackY)");
  checkVisibleStack(stackY, [
    { name: "y", asyncCause: null   },
    { name: "u", asyncCause: "UtoV" },
  ]);

  return saveStack(0, high);
}
function z() {
  let stackZ = saveStack();

  print("low.checkVisibleStack(stackZ)");
  checkVisibleStack(stackZ, [
    { name: "z", asyncCause: null    },
    { name: "u", asyncCause: "Async" },
  ]);

  return saveStack(0, high);
}


low .eval(a.toString());
high.eval(b.toString());
high.eval(c.toString());
high.eval(d.toString());
low .eval(e.toString());

low .b = high.b;
high.e = low .e;

low .eval(u.toString());
high.eval(v.toString());
high.eval(w.toString());
low .eval(x.toString());
low .eval(y.toString());
low .eval(z.toString());

low .v = high.v;
low .w = high.w;
high.x = low .x;
high.y = low .y;
high.z = low .z;

low .high = high;
high.low  = low;

low .eval(checkVisibleStack.toString());
high.eval(checkVisibleStack.toString());


low.a();
low.u();
