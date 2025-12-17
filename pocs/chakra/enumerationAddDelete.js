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

                print(`testing with ${n} properties`, true);
                print(`deleting property number ${propToDelete} on iteration ${iterToDelete}`, true);
                print(`adding a property on iteration ${iterToAdd}`, true);

                var o = makeobj(n);
                var iter = 0;

                for(var i in o)
                {
                    if(iter == iterToDelete)
                        delete o[propToDelete];

                    if(iter == iterToAdd)
                        o["xxx"] = 1;

                    print(`${i}`, true);

                    ++iter;
                }
            }
        }
    }
}

print(testFunction, 50);



function testFunction()
{
    testdelete(2);

    emitTTDLog(ttdLogURI);
}
