




function foo( a = b )  
{ 
    eval(""); 
    var b; 
} 

function bar( {a:a = b} )
{
    eval(""); 
    var b; 
} 


function test()
{
    try
    {
        
        foo();
        return false;
    }
    catch( a )
    {}

    try
    {
        
        bar({});
        return false;
    }
    catch( a )
    {}

    return true;
}

WScript.Echo(test() ? "PASSED" : "FAILED");
