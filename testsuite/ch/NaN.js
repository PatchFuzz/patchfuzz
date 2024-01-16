




function print(s) {
    if (typeof(WScript) == "undefined")
        document.write(s + "<br/>");
    else
        WScript.Echo(s);
}

var Count = 0;
var Failed = 0;

function Check(str, result, expected)
{
    if (result != expected)
    {
        print("Test #"+Count+" failed. <"+str+"> Expected "+expected);
        Failed++;
    }
}

function test()
{
    var x = NaN + 0.5;
    var r = false;

    
    Count++; r = false;
    if (x == x) {
        r = true;
    }
    Check("x == x", r, false);

    
    Count++; r = false;
    if (x != x) {
        r = true;
    }
    Check("x != x", r, true);

    
    Count++; r = false;
    if (x <= x) {
        r = true;
    }
    Check("x <= x", r, false);

    
    Count++; r = false;
    if (x < x) {
        r = true;
    }
    Check("x < x", r, false);

    
    Count++; r = false;
    if (x >= x) {
        r = true;
    }
    Check("x >= x", r, false);

    
    Count++; r = false;
    if (x > x) {
        r = true;
    }
    Check("x > x", r, false);

    
    Count++;
    Check("x == x", x == x, false);

    
    Count++;
    Check("x != x", x != x, true);

    
    Count++;
    Check("x <= x", x <= x, false);

    
    Count++;
    Check("x < x", x < x, false);

    
    Count++;
    Check("x >= x", x >= x, false);

    
    Count++;
    Check("x > x", x > x, false);

    
    Count++; r = false;
    if (x === x) {
        r = true;
    }
    Check("x === x", r, false);

    
    Count++; r = false;
    if (x !== x) {
        r = true;
    }
    Check("x !== x", r, true);


    if (!Failed)
    {
        print("Passed");
    }
}


test();
