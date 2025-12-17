function BailOut(ary)
{
    ary[0] = 1;
}

function DispatchCallWithThis(callback, arg)
{
     callback.call(this, arg);
}

function DispatchBailout(arg)
{
    DispatchCallWithThis(BailOut, arg);
}

DispatchBailout([1]);
DispatchBailout([1]);
DispatchBailout([1.1]);


function foo()
{
    print("foo");
};

function Dispatch(callback)
{
    callback.call(undefined);
}

function CallDispatch(callback)
{
    Dispatch(callback);
}

CallDispatch(foo);
CallDispatch(foo);
CallDispatch(foo);


CallDispatch(function() { print("bar"); });

CallDispatch(foo);


Function.prototype.call = Function.prototype.call;
CallDispatch(foo)
CallDispatch(foo)


CallDispatch(foo)
