




globalVar = {
  a : "Hello World",
  b : /regex/ig
};
function foo() {
  var localVar = {
    a : {
      b : 1
    }
  };
  var x = 1; 
}
foo();

var x = NaN;
function Level1Func() {
  var x = null;
  Level2Func();
}

function Level2Func() {
  var x = -Infinity;
  Level3Func();
}

function Level3Func() {
  var x = Math.PI;
  var y = 4; 
}
Level1Func();
WScript.Echo("pass");
