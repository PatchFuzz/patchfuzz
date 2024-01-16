








function test0(){
  var d = 1;
  function bar3 (){
    e = 1; 
  }
  for(var i = 0; i < 1 && bar3.call(); i++) {
    Math.sin();
  }
};
test0(); 
test0(); 
WScript.Echo("PASS");
