






function fromEval() {
  try {
    throw new Error('Caught Error');
  } catch (ex) {}
}

function foo() {
  eval("fromEval();");
}
foo();

function FuncLevel2() {
  var level2Var = 1;
  function FuncLevel3() {
    var level3Var = level2Var; 
  }
  FuncLevel3();
}

var globalVar = Math;

function FuncLevel1() {
  var level1Var = globalVar;
  FuncLevel2();
}
FuncLevel1(1);
WScript.Echo("pass");
