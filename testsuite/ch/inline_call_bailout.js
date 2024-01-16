













function test0(){
  var func2 = function() {}
  function bar1 (argMath12,argMath13){
    WScript.Echo(argMath12);
  }
  function bar3 (argMath16,argMath17){
    bar1.call(null , argMath16, (((argMath16++ ) instanceof func2)) * func2.call(null));
  }
  bar3(false);
};


test0(); 
test0(); 
