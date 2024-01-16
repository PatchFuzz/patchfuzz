









(function ()
{
    for (var i = 0; i < 2; i += 1)
    {
        try
        {
            (function ()
            {
                "use strict";

                if (i == 0)
                    f(); 

                if (true)
                {
                    function f() { }
                    f(); 
                }

                f(); 
            })();
        }
        catch (e)
        {
            e; 
        }
    }
})();

WScript.Echo("PASSED");