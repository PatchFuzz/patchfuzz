






function F2() {
    var a = new Array;                       
    var sub = -10;                            
}

function F3(r) {
    return 2 * 3.14 * r;
}

function F5() {
    var x = 20;     
    var y = {y1:1}; 
    var t1 = Math.abs(22.2);
    
    var f6 = function (arg) {
        var b1 = 10;
        var obj1 = {a1:x};
        var obj4 = F3(obj1.a1);
        return b1 + F2();
    }
    f6(t1);
    return y;
}

function Run(arg1, arg2, arg3)
{
    F5();
}

Run(12, "assdf", 112);
Run([3,5,8], {a:"aa"}, 21);

function Bar (c)
{
    var m = 10;
    return m;       
}

function F6() {
    var x = 2;
    Bar.apply(this, arguments); 
}
F6();
F6(1,4);

WScript.Echo("Pass");
