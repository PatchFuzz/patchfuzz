function testMathMinBound1() {
  
  
  var MathMin = Math.min.bind(null, 4);

  for (var i = 0; i < 100; ++i) {
    print(MathMin(i & 7), Math.min(i & 7, 4));
  }
}
testMathMinBound1();

function testMathMinBound2() {
  
  
  var MathMin = Math.min.bind(null, 4, 3);

  for (var i = 0; i < 100; ++i) {
    print(MathMin(i & 7), Math.min(i & 7, 3));
  }
}
testMathMinBound2();

function testMathMinBound3() {
  
  
  var MathMin = Math.min.bind(null, 4, 3, 2);

  for (var i = 0; i < 100; ++i) {
    print(MathMin(i & 7), Math.min(i & 7, 2));
  }
}
testMathMinBound3();

function testMathMinBound4() {
  
  
  var MathMin = Math.min.bind(null, 4, 3, 2, 1);

  for (var i = 0; i < 100; ++i) {
    print(MathMin(), 1);
  }
}
testMathMinBound4();

function testMathMinBound4NoInline() {
  
  
  var MathMin = Math.min.bind(null, 4, 3, 2, 1);

  for (var i = 0; i < 100; ++i) {
    print(MathMin(i & 7), Math.min(i & 7, 1));
  }
}
testMathMinBound4NoInline();

function testStringCharAt() {
  
  
  var str = "abcdefgh";
  var CharAt = String.prototype.charAt.bind(str, 0);

  for (var i = 0; i < 100; ++i) {
    print(CharAt(), "a");
  }
}
testStringCharAt();

function testArrayConstructor() {
  
  var A = Array.bind(null, 10);

  for (var i = 0; i < 100; ++i) {
    var a = new A();
    print(a.length, 10);
    print(Object.getPrototypeOf(a), Array.prototype);
  }
}
testArrayConstructor();

function testMathMaxSpreadNoInline() {
  
  
  var MathMax = Math.max.bind(null, 0);

  for (var i = 0; i < 100; ++i) {
    var args = [i - 1, i, i + 1];
    print(MathMax(...args), i + 1);
  }
}
testMathMaxSpreadNoInline();

function testMathMaxVariableBoundArgs() {
  
  var MathMax = [
    Math.max.bind(null, 4),
    Math.max.bind(null, 4, 5),
  ];

  for (var i = 0; i < 100; ++i) {
    print(MathMax[i & 1](i & 7), Math.max(i & 7, 4 + (i & 1)));
  }
}
testMathMaxVariableBoundArgs();

function testFunctionBindWithBoundArgNoInline() {
  var array = [];

  
  
  
  var FunBind = Function.prototype.bind.bind(Array.prototype.push, array);

  for (var i = 0; i < 100; ++i) {
    
    
    
    
    var push = FunBind();

    print(array.length, i * 3);
    push(1, 2, 3);
    print(array.length, (i + 1) * 3);
  }
}
testFunctionBindWithBoundArgNoInline();
