




function foo() 
{
    for(var i = 0; i < arguments.length;i++)
    {
        if(arguments[i] != i+1)
        {
            print("FAIL");
        }
    }
    print("PASS");
}
