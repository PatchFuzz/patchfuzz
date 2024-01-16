




function makeobj(n)
{
    var obj = { };

    for(var i = 0; i < n; ++i)
    {
        obj[i] = 1;
    }

    return obj;
}

function testdelete(n)
{
    for(var propToDelete = 0; propToDelete <= n; ++propToDelete)
    {
        for(var iterToDelete = 0; iterToDelete <= n; ++iterToDelete)
        {
            for(var iterToAdd = 0; iterToAdd <= n; ++iterToAdd)
            {

                WScript.Echo("testing with " + n + " properties");
                WScript.Echo("deleting property number " + propToDelete + " on iteration " + iterToDelete);
                WScript.Echo("adding a property on iteration " + iterToAdd);

                var iter = 0;
                var o = makeobj(n);

                for(var i in o)
                {
                    if(iter == iterToDelete)
                        delete o[propToDelete];

                    if(iter == iterToAdd)
                        o["xxx"] = 1;

                    WScript.Echo(i);

                    ++iter;
                }
            }
        }
    }
}

for(var i = 0; i < 8; ++i)
{
    testdelete(i);
}
