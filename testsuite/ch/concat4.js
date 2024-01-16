




eval = function(){};

Get_ed = function () { return "ed"; }
Get_Fail = function () { return "Fail"; }

function foo()
{
    var Pa = "Pa" + "ss";
    var Pass = Pa + Get_ed();
    var PaFail = Pa + Get_Fail();
    eval();
    WScript.Echo(Pass);
}
foo()
