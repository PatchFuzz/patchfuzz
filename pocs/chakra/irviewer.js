function foo() {
  return 1;
}

function blah(a,b) {
  return (a+b)*2+42;
}



print("--- parseIR ---");
var x = parseIR("function bar() {return 42;}");  



print("--- functionList ---");
var fnlist = functionList();  



print("--- rejitFunction ---");

var fn, fnSrcInfo, fnId;
fn = fnlist[0];
fnSrcInfo = fn.utf8SrcInfoPtr;
fnId = fn.funcId;

rejitFunction(fnSrcInfo, fnId);  
