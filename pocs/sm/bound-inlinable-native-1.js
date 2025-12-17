function testMathMin() {
  
  var MathMin = Math.min.bind();

  for (var i = 0; i < 100; ++i) {
    print(MathMin(i, 50), Math.min(i, 50));
  }
}
testMathMin();

function testMathMinMax() {
  
  var MathMinMax = [
    Math.min.bind(),
    Math.max.bind(),
  ];

  
  var minmax = [
    Math.min,
    Math.max,
  ];

  for (var i = 0; i < 200; ++i) {
    print(MathMinMax[i & 1](i, 50), minmax[i & 1](i, 50));
  }
}
testMathMinMax();

function testMathMinBoundAndNonBound() {
  
  var MathMin = [
    Math.min.bind(),
    Math.min,
  ];

  for (var i = 0; i < 200; ++i) {
    print(MathMin[i & 1](i, 50), Math.min(i, 50));
  }
}
testMathMinBoundAndNonBound();

function testStringCharCodeAt() {
  
  
  var str = "abcdefgh";
  var CharCodeAt = String.prototype.charCodeAt.bind(str);

  for (var i = 0; i < 100; ++i) {
    print(CharCodeAt(i & 7), str.charCodeAt(i & 7));
  }
}
testStringCharCodeAt();

function testArrayConstructor() {
  
  var A = Array.bind();

  for (var i = 0; i < 100; ++i) {
    var a = new A(i);
    print(a.length, i);
    print(Object.getPrototypeOf(a), Array.prototype);
  }
}
testArrayConstructor();

function testArrayConstructorSubclass() {
  
  var BoundArray = Array.bind();

  
  print("prototype" in BoundArray, false);

  
  BoundArray.prototype = Array.prototype;
  
  
  
  class A extends BoundArray {}

  for (var i = 0; i < 100; ++i) {
    var a = new A(i);
    print(a.length, i);
    print(Object.getPrototypeOf(a), A.prototype);
  }
}
testArrayConstructorSubclass();

function testMathMaxSpread() {
  
  var MathMax = Math.max.bind();

  for (var i = 0; i < 100; ++i) {
    var args = [i - 1, i, i + 1];
    print(MathMax(...args), i + 1);
  }
}
testMathMaxSpread();

function testFunctionBind() {
  
  
  var FunBind = Function.prototype.bind.bind(Array.prototype.push);

  for (var i = 0; i < 100; ++i) {
    var array = [];

    
    
    
    
    
    var push = FunBind(array);

    print(array.length, 0);
    push(1, 2, 3);
    print(array.length, 3);
  }
}
testFunctionBind();
