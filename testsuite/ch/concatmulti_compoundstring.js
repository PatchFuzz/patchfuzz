




function test()
{

    var cs = "a";
    for (var i = 0; i < 10; i++)
    {
        cs += i;        
    }

    var a = "blahblahblah" + cs + "blahblahblah"; 
    cs += "Z";  
    WScript.Echo(a); 
}

test();
test();
