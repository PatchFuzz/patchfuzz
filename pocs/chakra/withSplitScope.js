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

print("Pass");
