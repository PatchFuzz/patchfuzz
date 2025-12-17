function foo(loop)
{
    while(loop)
    {
        print("eval");
        print("syntax");
    }
}

var a = 10;

eval("bar = function bar() {\nprint('bar function') }");
bar();
