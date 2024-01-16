






var stackAlloc = true;

var g;
function Ctor()
{
    
}

function test(p)
{
    var a;
    if (stackAlloc)
    {
        a = new Ctor();
        a.z = p + 0.1; 
        a.escape = p + 0.2; 
    }
    else
    {
        a = new Ctor();
        g = a;
        a.z = p + 0.1   
        a.escape = p + 0.2; 
    }

    
    a.x = a.z + 0.2;      
    var c;
    if (stackAlloc)
    {  
        c = a;          
    }    
    else
    {
        c = new Ctor();
    }
    c.y = p + 0.3;      

    return a.escape;
}
     
WScript.Echo(test(0.1));
stackAlloc = false;
WScript.Echo(test(0.1));
WScript.Echo(g.z);
WScript.Echo(g.x);
WScript.Echo(g.y);

stackAlloc = true;
WScript.Echo(test(0.1));
stackAlloc = false;
WScript.Echo(test(0.1));
WScript.Echo(g.z);
WScript.Echo(g.x);
WScript.Echo(g.y);


function test2(p)
{
    var a;
    if (stackAlloc)
    {
        a = new Ctor();
        a.x = 1.1 + p; 
    }
    else
    {
        a = new Ctor();
        a.x = 1.2 + p; 
    }

    a.y = 1.3 + p; 


    var c = a;
    c.z = 1.4 + p; 
}


WScript.Echo("Test 2");
stackAlloc = true;
test2(0.1);
stackAlloc = false;
test2(0.1);

stackAlloc = true;
test2(0.1);
stackAlloc = false;
test2(0.1);

function test3(p)
{
    
    var a = new Ctor();
    a.x = p + 1.1; 
    a.y = p + 1.2; 

    for (var i = 0; i < 2; i++)
    {
        var n = a.x;
        a.x = n + 1.1; 


        var q = a.y;
        a.y = i + 1.4; 
        a.z = q;
        WScript.Echo("kill field hoist/copy prop");
    }
    var temp = a.y + 1.3;
    var temp2 = a.z + 1.3;
    WScript.Echo(temp);
    WScript.Echo(temp2);
}


WScript.Echo("Test 3");
test3(0.1);
test3(0.1);
test3(0.1);


var name = "y";
function test4(p)
{
    
    var a = new Ctor();
    a.x = p + 1.1; 
    a.y = a.x + 1.1;  
    return a[name];
}

WScript.Echo("Test 4");
WScript.Echo(test4(0.1));
WScript.Echo(test4(0.1));
WScript.Echo(test4(0.1));
WScript.Echo("Test 5");
function test5(p)
{
    
    var a = new Ctor();
    a.x = p + 1.1;          
    a.y = a.x + 1.1;        
    a[0] = p + 1.2;         
    WScript.Echo(a[0]);     
    return a[name] + 1.1;
}

WScript.Echo(test5(0.1));
WScript.Echo(test5(0.1));
WScript.Echo(test5(0.1));


WScript.Echo("Test 6");
function test6(p)
{
    var a = new Ctor();

    
    a.x = p + 1.1;          
    a.y = p + 1.2;

    for (var i = 0; i < 2; i++)
    {
        var n = a[name];
        a.y = i + 1.4;        
        a.z = n;
    }
    WScript.Echo(a.z + 0.1);
}

test6(0.1);
test6(0.1);
test6(0.1);


WScript.Echo("Test 7");
var func = function (p)
{
    return p+4.4;
}
function test7(p)
{
    var lit = { prop1: p + 1.1, "14": 4.4, prop2: p+2.2, prop1: p+ 0.1, prop5: func(p), prop3: p+3.3 }; 
    return lit.prop1 + lit.prop5;
}

WScript.Echo(test7(1));
WScript.Echo(test7(1));

var func = function(p)
{
    return p + 5.5;
}
WScript.Echo(test7(1));



WScript.Echo("Test 8")
var obj = {};
var func = function(p)
{
    var alias = obj;
    var lit = { prop1: p + 0.1 }; 
    var prop1;
    for (var i = 0;i < 1; i++)
    {
        prop1 = lit.prop1;    
    }
    alias.prop1 = prop1;

}

func(0.1);
func(0.1);
func(0.1);
WScript.Echo(obj.prop1);

