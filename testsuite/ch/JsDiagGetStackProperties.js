







try {
  throw 1;
} catch (ex) {}

try {
  throw new Error('Caught Error');
} catch (ex) {}


var globalVar = {
  prop : 1
};

function FuncLevel1() {
  var level1Var = {
    prop : 1
  };
  function FuncLevel2() {
    var level2Var = {
      prop : 1
    };
    function FuncLevel3() {
      var localVar1 = level1Var;
      var localVar2 = level2Var; 
    }
    FuncLevel3();
  }
  FuncLevel2();
}
FuncLevel1(1);


function outerFunc1() {
  function innerFunc1() {
    return 1;
  }
  function innerFunc2() {
    return "2";
  }
  function innerFunc3() {
    return new Object(3);
  }
  return innerFunc1() + innerFunc2() + innerFunc3(); 
}
outerFunc1();
WScript.Echo("pass");
