function evalCall()
{
    var z = "local";
    a.eval.call("var x='ineval'; z;");
    function foo()
    {
        z;
    }
}
function assign()
{
    
    a = this; 
    evalCall(); 
}
print(assign);
print("PASSED");