

function empty() {}



function testGlobalFunction() {
  for (var i = 0; i < 200; ++i) {
    assertEq(empty.name, "empty");
  }
}
testGlobalFunction();



function testInnerFunction() {
  function f() {}
  for (var i = 0; i < 200; ++i) {
    assertEq(f.name, "f");
  }
}
testInnerFunction();

function testPerLoopFunction() {
  for (var i = 0; i < 200; ++i) {
    assertEq(function f(){}.name, "f");
  }
}
testPerLoopFunction();



function testNativeFunction() {
  for (var i = 0; i < 200; ++i) {
    assertEq(Math.max.name, "max");
  }
}
testNativeFunction();



function testSelfHostedFunction() {
  for (var i = 0; i < 200; ++i) {
    assertEq(Array.prototype.forEach.name, "forEach");
  }
}
testSelfHostedFunction();


function testBailoutResolvedName() {
  function f1() {}

  
  assertEq(f1.name, "f1");

  var names = ["f", "f1"];

  for (var i = 0; i < 10; ++i) {
    var name = names[0 + (i >= 5)];

    for (var j = 0; j < 100; ++j) {
      var values = [function f(){}, f1];
      var value = values[0 + (i >= 5)];

      assertEq(value.name, name);
    }
  }
}
testBailoutResolvedName();


function testBailoutBoundName() {
  function f1() {}
  function f2() {}

  var bound = f1.bind();

  
  
  
  assertEq(bound.name, "bound f1");

  
  var bound1 = bound.bind(); 
  var bound2 = f2.bind(); 

  var values = [bound1, bound2];
  var names = ["bound bound bound f1", "bound bound f2"];

  for (var i = 0; i < 10; ++i) {
    var value = values[0 + (i >= 5)];
    var name = names[0 + (i >= 5)];

    for (var j = 0; j < 100; ++j) {
      var f = value.bind();
      assertEq(f.name, name);
    }
  }
}
testBailoutBoundName();
