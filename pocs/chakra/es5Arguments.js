function foo(a){
  "use strict";
  a = 42;
  
  var res = {};
  var args = arguments;
    
  res.a = function() { return a; };
  res.arg = function() { return args[0]; };

  return res;
}

var x = foo(17);

print(testFunction, 50);



function testFunction()
{
    print(`a: ${x.a()}`, true); 
    print(`arg: ${x.arg()}`, true); 

    emitTTDLog(ttdLogURI);
}