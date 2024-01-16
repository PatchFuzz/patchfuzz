






function F1() {
    var a = new Array;                       
    var sub = -10;                            
    return a.length;
}

function F2(a1)
{
    var j = 10;
    var j1 = {x:"x", y : 31};
    var m = 20 + a1.toString();                           
    F1();
}

function Run(arg1)
{
    F2(arg1);
}

Run(12);
Run([3,5,8])
Run({a:"aa"});
Run([3,5,8]);

WScript.Echo("Pass");

