




var count = 0;
var myEval = eval;
function foo() {
    myEval("var x" + count + " = 0;"); 
    myEval("var x" + count++ + " = 0;"); 
    var y;  
}
foo();
WScript.Attach(foo);
WScript.Detach(foo);
WScript.Attach(foo);
WScript.Echo("pass");
