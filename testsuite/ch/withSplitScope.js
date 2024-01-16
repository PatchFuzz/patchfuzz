




function foo()
{
    (function bar(a = 
        (function() 
        {
            with (1)
            {
                bar;
            }
        })()
    ){})();
}

foo();
foo();
foo();

WScript.Echo("Pass");
