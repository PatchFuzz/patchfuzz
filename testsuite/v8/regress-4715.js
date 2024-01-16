





var training = {};
training.a = "nop";
training.slow = "nop";
delete training.slow;  

var keepalive = {};
keepalive.a = "nop";  

function GetReal() {
  var r = {};
  r.a = "nop";
  r.b = "nop";
  r.c = "dictionarize",
  r.d = "gc";
  r.e = "result";
  return r;
};

function SideEffect(object, action) {
  if (action === "dictionarize") {
    delete object.a;
  } else if (action === "gc") {
    gc();
  }
}

function foo(object) {
  for (var key in object) {
    SideEffect(object, object[key]);
  }
  return key;
}
%PrepareFunctionForOptimization(foo);


foo(training);
SideEffect({a: 0}, "dictionarize");
SideEffect({}, "gc");


%OptimizeFunctionOnNextCall(foo);

assertEquals("e", foo(GetReal()));
