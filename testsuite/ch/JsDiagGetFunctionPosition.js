





var x = 1;
function foo() {
  x = 2;
}
WScript.DumpFunctionPosition(foo);


var obj = {
  func : function () {
    WScript.Echo('');
  }
};
WScript.DumpFunctionPosition(obj.func);

var global = WScript.LoadScript("function foo(){}", "samethread", "dummyFileName.js");
WScript.DumpFunctionPosition(global.foo);

var evalFunc = eval('new Function("a", "b", "    return a + b;")');
WScript.DumpFunctionPosition(evalFunc);

function blah() {
  
  var xyz = 1;
}
WScript.DumpFunctionPosition(blah);


WScript.DumpFunctionPosition(JSON.stringify);
WScript.DumpFunctionPosition(eval);

WScript.Echo("pass");
