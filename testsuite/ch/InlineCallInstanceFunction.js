




function Foo()
{
     WScript.Echo("foo"); 
}

function DispatchCallInstance(callback, thisArg)
{
    __chakraLibrary.builtInCallInstanceFunction(callback, thisArg);
}

function DispatchFooCallInstance() { DispatchCallInstance(Foo, {}); }
DispatchFooCallInstance();
DispatchFooCallInstance();
DispatchFooCallInstance();


function BailOut(ary)
{
    ary[0] = 1;
}

function DispatchCallWithThis(callback, arg)
{
    __chakraLibrary.builtInCallInstanceFunction(callback, this, arg);
}

function DispatchBailout(arg)
{
    DispatchCallWithThis(BailOut, arg);
}

DispatchBailout([1]);
DispatchBailout([1]);
DispatchBailout([1.1]);
