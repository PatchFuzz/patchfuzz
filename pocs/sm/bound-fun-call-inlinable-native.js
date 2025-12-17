function testMathMin() {
  
  var MathMin = Function.prototype.call.bind(Math.min);

  for (var i = 0; i < 100; ++i) {
    
    print(MathMin(undefined, i, 50), Math.min(i, 50));
  }
}
testMathMin();

function testMathMinMax() {
  
  var MathMinMax = [
    Function.prototype.call.bind(Math.min),
    Function.prototype.call.bind(Math.max),
  ];

  
  var minmax = [
    Math.min,
    Math.max,
  ];

  for (var i = 0; i < 200; ++i) {
    
    print(MathMinMax[i & 1](null, i, 50), minmax[i & 1](i, 50));
  }
}
testMathMinMax();

function testMathMinBoundAndNonBound() {
  
  var MathMin = [
    Function.prototype.call.bind(Math.min),
    Math.min,
  ];

  for (var i = 0; i < 200; ++i) {
    
    
    print(MathMin[i & 1](Infinity, i, 50), Math.min(i, 50));
  }
}
testMathMinBoundAndNonBound();

function testStringCharCodeAt() {
  
  
  var str = "abcdefgh";
  var CharCodeAt = Function.prototype.call.bind(String.prototype.charCodeAt);

  for (var i = 0; i < 100; ++i) {
    print(CharCodeAt(str, i & 7), str.charCodeAt(i & 7));
  }
}
testStringCharCodeAt();

function testStringCharCodeAtWithBoundThis() {
  
  var str = "abcdefgh";
  var CharCodeAt = Function.prototype.call.bind(String.prototype.charCodeAt, str);

  for (var i = 0; i < 100; ++i) {
    print(CharCodeAt(i & 7), str.charCodeAt(i & 7));
  }
}
testStringCharCodeAtWithBoundThis();

function testStringCharCodeAtWithBoundArgs() {
  
  var str = "abcdefgh";
  var CharCodeAt = Function.prototype.call.bind(String.prototype.charCodeAt, str, 0);

  for (var i = 0; i < 100; ++i) {
    print(CharCodeAt(), str.charCodeAt(0));
  }
}
testStringCharCodeAtWithBoundArgs();

function testMathRandomWithNoArgs() {
  
  var MathRandom = Function.prototype.call.bind(Math.random);

  for (var i = 0; i < 100; ++i) {
    var r = MathRandom();
    print(0 <= r && r < 1, true);
  }
}
testMathRandomWithNoArgs();

function testMathMinBoundArgsAndStackArgs() {
  
  var str = "abcdefgh";
  var MathMin = Function.prototype.call.bind(Math.min, null, 50);

  for (var i = 0; i < 100; ++i) {
    print(MathMin(i), Math.min(50, i));
  }
}
testMathMinBoundArgsAndStackArgs();
