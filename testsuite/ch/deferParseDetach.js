




function test0() {}
function test1() 
{ 
    var x="HELLO"; 
    var z= "test"; 
    var s = x+z;
}
WScript.Attach(test1);
WScript.Detach(test1);
WScript.Echo("PASSED");