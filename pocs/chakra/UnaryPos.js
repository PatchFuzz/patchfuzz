function AsmModule() {
    "use asm";
    function bd() {
        return +0;
    }    
    function foo()
    {
        var y = 5.5;
        y = +bd();
        return +y;
    }
    return foo;
}

var asmModule = AsmModule();
if(asmModule() == 0)
{
    print("pass");
}





