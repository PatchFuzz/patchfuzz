




function write(v) { WScript.Echo(v + ""); }


function modByNeg(x)
{
    return 32 % x;
}
function modByNonPowerOf2(x)
{
    return 32 % x;
}

function modOfNeg(a, x)
{
   a = a | 0; 
   return a % x;
}

function runTest()
{
    write(modByNeg(16)); 
    write(modByNeg(-3)) 
    
    write(modByNonPowerOf2(16*16)); 
    write(modByNonPowerOf2(23)) 
    
    write(modOfNeg(100, 32));
    write(modOfNeg(-12, 32)); 
    
    for(var i=0; i < 500; i++)
    {
        modByNeg(-3); 
    }
}

runTest();
