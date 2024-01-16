

function empty() {}



function testGlobalFunction() {
  for (var i = 0; i < 200; ++i) {
    assertEq(empty.length, 0);
  }
}
testGlobalFunction();



function testInnerFunction() {
  function f() {}
  for (var i = 0; i < 200; ++i) {
    assertEq(f.length, 0);
  }
}
testInnerFunction();

function testPerLoopFunction() {
  for (var i = 0; i < 200; ++i) {
    assertEq(function(){}.length, 0);
  }
}
testPerLoopFunction();



function testNativeFunction() {
  for (var i = 0; i < 200; ++i) {
    assertEq(Math.max.length, 2);
  }
}
testNativeFunction();



function testSelfHostedFunction() {
  for (var i = 0; i < 200; ++i) {
    assertEq(Array.prototype.forEach.length, 1);
  }
}
testSelfHostedFunction();


function testBailoutLength() {
  var values = [0, 0x80000000];
  var bound = empty.bind();

  for (var i = 0; i < 10; ++i) {
    var value = values[0 + (i >= 5)];

    
    Object.defineProperty(bound, "length", {value});

    for (var j = 0; j < 100; ++j) {
      var f = bound.bind();
      assertEq(f.length, value);
    }
  }
}
testBailoutLength();


function testBailoutLazyFunction() {
  for (var i = 0; i < 200; ++i) {
    var values = [function(){}, function(a){}];
    var index = 0 + (i >= 100);
    assertEq(values[index].length, index);
  }
}
testBailoutLazyFunction();


function testBailoutLazySelfHostedFunction() {
  for (var i = 0; i < 200; ++i) {
    var values = [function(){}, Array.prototype.map];
    var index = 0 + (i >= 100);
    assertEq(values[index].length, index);
  }
}
testBailoutLazySelfHostedFunction();
