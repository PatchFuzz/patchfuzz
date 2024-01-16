




var foo = function(){}
function letTest() {
    let sc1 = 0;
    with({})
    {
        sc1 = foo;
        sc1();
    }
    this.method0.apply(this, arguments);
}

function constTest() {
    const sc1 = 0;
    with({})
    {
        sc1 = foo;
        sc1();
    }
    this.method0.apply(this, arguments);
}

function varTest() {
    with({})
    {
        var sc1 = foo;
        sc1();
    }
    this.method0.apply(this, arguments);
}

function TryFunction(f)
{
    try
    {
        f();
    }catch (e) {
        if (e instanceof TypeError) { 
            return true;
        }
        if (e instanceof ReferenceError) { 
            return true;
        }
    }
}
if(TryFunction(letTest) && TryFunction(constTest) && TryFunction(varTest))
{
    print("Pass");
}
