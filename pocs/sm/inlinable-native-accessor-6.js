setJitCompilerOption("ion.forceinlineCaches", 1);

function testMathRandom() {
  var obj = Object.defineProperty({}, "random", {get: Math.random});

  for (var i = 0; i < 100; ++i) {
    var r = obj.random;
    print(0 <= r && r < 1, true);
  }
}
testMathRandom();

function testDateGetTime() {
  Object.defineProperty(Date.prototype, "time", {get: Date.prototype.getTime});

  var d = new Date(0);
  for (var i = 0; i < 100; ++i) {
    print(d.time, 0);
  }
}
testDateGetTime();

function testNumberToString() {
  Object.defineProperty(Number.prototype, "tostr", {get: Number.prototype.toString});

  for (var i = 0; i < 100; ++i) {
    print(0..tostr, "0");
    print(0.5.tostr, "0.5");
  }
}
testNumberToString();

function testStringAt() {
  Object.defineProperty(String.prototype, "at_", {get: String.prototype.at});

  for (var i = 0; i < 100; ++i) {
    print("a".at_, "a");
  }
}
testStringAt();

function testArraySlice() {
  Object.defineProperty(Array.prototype, "sliced", {get: Array.prototype.slice});

  for (var i = 0; i < 100; ++i) {
    print([1, 2].sliced.length, 2);
  }
}
testArraySlice();

function testArraySliceArguments() {
  Object.defineProperty(arguments, "sliced", {get: Array.prototype.slice});

  for (var i = 0; i < 100; ++i) {
    print(arguments.sliced.length, 0);
  }
}
testArraySliceArguments();

function testArrayJoin() {
  Object.defineProperty(Array.prototype, "joined", {get: Array.prototype.join});

  for (var i = 0; i < 100; ++i) {
    print([].joined, "");
    print(["a"].joined, "a");
  }
}
testArrayJoin();

function testFunctionBind() {
  Object.defineProperty(Function.prototype, "bound", {get: Function.prototype.bind});

  for (var i = 0; i < 100; ++i) {
    
    print(function(){ return i; }.bound(), i);

    
    var r = Math.random.bound();
    print(0 <= r && r < 1, true);
  }
}
testFunctionBind();
